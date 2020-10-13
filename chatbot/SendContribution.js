async payload => {

  const questions = {
    "443495873": {
      "question": `Do you have a memory of reading that you would like to share?`,
      "preset":{
        "co:about": ["reo:Memory", "reo:Content", "reo:ReadingProcess"]
      }
    },
    "2317837603": {
      "question": `What is a book that changed your life and why?`,
      "preset":{
        "co:about": ["reo:Content", "reo:StateOfMind"]
      }
    },
    "2873582813": {
      "question": `What are you reading today and why?`,
      "preset":{
        "co:about": ["reo:StateOfMind", "reo:ReadingProcess"]
      }
    },
    "3114555370": {
      "question":`What is a memorable thing you have ever read and why?`,
      "preset":{
        "co:about": ["reo:Content", "reo:Memory", ]
      }
    },
    "3623227603": {
      "question": `Can you tell me a good reason for reading?`,
      "preset":{
        "co:about": ["reo:Habit"]
      }
    }
  }


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
  }

  /* JSON-LD data structure */
  const context = {
    "@base" : "http://data.open.ac.uk/read-it/",
    "co": "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
    "reo": "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#",
    "schema": "http://schema.org/",
    "schema:datePublished":{
      "@type": "xsd:date"
    },
    "xsd": "http://www.w3.org/2001/XMLSchema#",
  };

  const aData = {
    "@id": "http://data.open.ac.uk/read-it/questions/",
    "@type": "co:Question",
    "co:answer": {
      "@id": "http://data.open.ac.uk/read-it/answers/",
      "@type": "co:Answer",
      "co:producedBy": "http://data.open.ac.uk/read-it/questions/",
      "schema:text":"",
      "schema:datePublished":"Tue, 18 Aug 2020 09:43:28 +0000",
    	"schema:inLanguage": "en-GB"
    }
  };
  let url;
  // firebase
  try {
    url = await toolbelt.config.get('url');
  }catch(err){
    console.error("error flow.ai configuration",err);
  }

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
    question: q.value || "",
    answer: a.value || ""
  }
  entry.id = `chatbot-${hash(entry.question)}`;
  entry.answerId = entry.date.concat("-",entry.id,"-",hash(entry.answer));
  //console.log("entry",entry);

  /**** QUESTION-ANWER ENTRY ****/
  // generate hash id for the question
  aData["@id"] = aData["@id"].concat(entry.id);
  // fill the question name
  aData["schema:name"] = entry.question;

  aData["co:answer"]["@id"] = aData["co:answer"]["@id"].concat(entry.answerId);
  aData["co:answer"]["co:producedBy"] = aData["@id"];
  aData["co:answer"]["schema:text"] = entry.answer;
  aData["co:answer"]["schema:datePublished"] = entry.date;

  // add presets
  let preset = questions[hash(entry.question)].preset || {};
  aData = Object.assign({},aData,questions[hash(entry.question)]);


  // add question
  let data = Object.assign({}, context, aData);


  // console.log(data);

  // save entry
  try{

    let result = await request({
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
