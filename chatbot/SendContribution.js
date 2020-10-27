async payload => {
  const questions = {
    "443495873": {
      "question": `Do you have a memory of reading that you would like to share?`,
      "co:Question": {
        "co:aboutConcept": ["reo:Memory", "reo:Content", "reo:ReadingProcess"]
      }
    },
    "2317837603": {
      "question": `What is a book that changed your life and why?`,
      "co:Question": {
          "co:aboutConcept": ["reo:Content", "reo:Achievment"]
      },
      "co:Answer": {
        "co:distance": "distant"
      }
    },
    "2873582813": {
      "question": `What are you reading today and why?`,
      "co:Question": {
        "co:aboutConcept": ["reo:StateOfMind", "reo:ReadingProcess"]
      },
      "co:Answer":{
        "co:distance": "close"
      }
    },
    "3114555370": {
      "question":`What is a memorable thing you have ever read and why?`,
      "co:Question": {
        "co:aboutConcept": ["reo:Content", "reo:Memory"]
      },
      "co:Answer": {
        "co:distance": "distant"
      }
    },
    "3623227603": {
      "question": `Can you tell me a good reason for reading?`,
      "co:Question": {
        "co:aboutConcept": ["reo:Habit", "reo:Aim"]
      }
    }
  };

  // hash function
  function hash (str) {
    // console.log(str, typeof str)
    str = String(str);
    let h = 5381,
        i    = str.length;

    while(i) {
      h= (h * 33) ^ str.charCodeAt(--i);
    }
    return h >>> 0;
  };

  /* JSON-LD data structure */
  const context = {
    "@context":{
      "@base" : "http://data.open.ac.uk/read-it/",
      "co": "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo": "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    }
  };

  const aData = {
    "@id": "http://data.open.ac.uk/read-it/questions/",
    "@type": "co:Question",
    "co:answer": {
      "@id": "http://data.open.ac.uk/read-it/answers/",
      "@type": "co:Answer",
      "co:isAnswerOf": "http://data.open.ac.uk/read-it/questions/",
    	"co:inLanguage": "en-GB"
    }
  };


  // building date
  // format "YY/M/D@H:MM:s"
  const d = new Date,
    dformat = [d.getFullYear(),d.getMonth()+1,d.getDate()].join('/')+'@'+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

  // building data
  let {
    question = [],
    answer = [],
    ...params
  } = payload.params;

  // console.info(`crunching entry ${question}, ${answer}`);
  // console.info("data",dformat);
  let q = question.pop(), a = answer.pop();
  let entry = {
    date: dformat,
    question: q ? q.value : "",
    answer: a ? a.value : ""
  }
  entry.id = `chatbot-${hash(entry.question)}`;
  entry.answerId = entry.date.concat("-",entry.id,"-",hash(entry.answer));
  //console.log("entry",entry);

  // fill the data for the db
  let data = Object.assign({}, context, aData );


  /**** QUESTION-ANWER ENTRY ****/
  // generate hash id for the question
  data["@id"] = data["@id"].concat(entry.id);
  // fill the question name
  data["co:text"] = entry.question;

  data["co:answer"]["@id"] = data["co:answer"]["@id"].concat(entry.answerId);
  data["co:answer"]["co:isAnswerOf"] = data["@id"];
  data["co:answer"]["co:answerText"] = entry.answer;
  data["co:answer"]["co:date"] = entry.date;

  // add notes
  let notes = questions[hash(entry.question)];
  if(notes && notes["co:Answer"]){
    data["co:answer"] = Object.assign({}, data["co:answer"], notes["co:Answer"] );
  }
  if(notes && notes["co:Question"]){
    data = Object.assign({}, data, notes["co:Question"]);
  }

  // console.log(data);

  // save entry
  try{
    // get firebase url from config
    const url = await toolbelt.config.get('url');
    // send data
    const result = await request({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data,
      url,
    });

    // console.info("result",result.statusText,result.status);

  } catch(err) {
    console.error(err);
  }



  // reset
  return {
    params: {
      ...params,
      question:null,
      answer:null
    }
  }

}
