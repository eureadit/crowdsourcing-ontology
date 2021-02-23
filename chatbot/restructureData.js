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

const data = {
    "-M9J6ul2Ky0IenZ1ZXbh" : {
      "answer" : {
        "value" : "J.R.R. Tolkien's The Lord of the Rings. The first book I ever read in the English language"
      },
      "date" : "2020/6/8@13:30:2",
      "question" : {
        "value" : "a book that changed your life and why"
      },
      "userId" : "1163318039"
    },
    "-MBdQb8RfWqXA-vuNOLb" : {
      "answer" : {
        "value" : "Judith Herrin's Byzantium: The Surprising Life of a Medieval Empire"
      },
      "date" : "2020/7/7@13:19:30",
      "question" : {
        "value" : "a book that changed your life and why"
      },
      "userId" : "1163318039"
    },
    "-MFUyvF_vtQuGB4t9DVn" : {
      "answer" : {
        "value" : "Reading at the beach when I was five\nIt was a book I’d just been bought as it was too cold to go in the sea, so I could sit and read instead"
      },
      "date" : "2020/8/24@10:20:23",
      "question" : {
        "value" : "a memory of reading would you like to share"
      }
    },
    "-MFVcFQx79hE2-28q9H7" : {
      "answer" : {
        "value" : "I am reading Patrick Ness's The Ask and the Answer. I am reading it because it is one of my child's favourite books and they suggested I read it as well. It has also won literary awards, so I am curious to evaluate it.\nLast week I read the previous book in Patrick Ness's Chaos Walking trilogy, The Knife of Never Letting Go, which I found excellent"
      },
      "date" : "2020/8/24@13:20:57",
      "question" : {
        "value" : "what you are reading today and why"
      }
    },
    "-MFVclt--ObLKu5qqdr1" : {
      "answer" : {
        "value" : "to expand our cognition. There are places in the world, events in history, types of activities that I can never experience in person. By reading about them, I can become more than just what I see with my own eyes."
      },
      "date" : "2020/8/24@13:23:14",
      "question" : {
        "value" : "a good reason for reading"
      }
    },
    "-MFfA-7855F84xWH8A-a" : {
      "answer" : {
        "value" : "Jenny Uglow's Elizabeth Gaskell, because I need to learn more about this author since I am writing teaching material about her"
      },
      "date" : "2020/8/26@14:28:58",
      "question" : {
        "value" : "what you are reading today and why"
      }
    },
    "-MFkLdx5fKJTV8X8rj3u" : {
      "answer" : {
        "value" : "I remember reading J.K. Rowling’s Harry Potter and the Deathly Hallows at night while I was nursing my newborn baby, holding the book in one hand and the baby in the other\nReading helped me to stay awake at a time when I was getting very little sleep"
      },
      "date" : "2020/8/27@14:37:59",
      "question" : {
        "value" : "What is a memorable thing you have ever read?"
      }
    },
    "-MFvYgckzY-x1DlzZBFN" : {
      "answer" : {
        "value" : "I remember reading most of Jules Verne’s novels when I was in middle school. A relative had given Around the World in Eighty Days to my brother as a present. He did not like it, so he passed it on to me. I devoured it and then read through the Verne section of my local library."
      },
      "date" : "2020/8/29@18:50:47",
      "question" : {
        "value" : "Do you have memory of reading that would you like to share?"
      }
    },
    "-MGA5-umWDDW1qlokZVB" : {
      "answer" : {
        "value" : "I am reading Elizabeth Gaskell’s Mary Barton, because I am writing a book chapter about it"
      },
      "date" : "2020/9/1@19:15:1",
      "question" : {
        "value" : "What are you reading today and why?"
      }
    },
    "-MGPYqiqQJ6x8Izq2pjW" : {
      "answer" : {
        "value" : "I remember reading Naomi Novik’s Uprooted while visiting Kraków in Poland. While the book is a fantasy novel, it is inspired by Polish folklore. I was able to recognise several locations based on Kraków landmarks, which enhanced my enjoyment of the novel."
      },
      "date" : "2020/9/4@19:19:42",
      "question" : {
        "value" : "Do you have memory of reading that would you like to share?"
      }
    },
    "-MGhLdptbu8NaDd9dZPk" : {
      "answer" : {
        "value" : "Yes. When I was growing up I enjoyed reading books about sharks.\nIt was after I wrote a school project about great white sharks."
      },
      "date" : "2020/9/8@10:54:48",
      "question" : {
        "value" : "Do you have memory of reading that would you like to share?"
      }
    },
    "-MGmg2Q7RJIrtwNJjQak" : {
      "answer" : {
        "value" : "Yes I recently read the novel by Albert Camus, The Plague\nIt’s very relevant to our lives with quarantine today\nIt’s set in Algeria and the there is an outbreak of the bubonic plague\nSo people have to quarantine, like we have done during the current COVID pandemic"
      },
      "date" : "2020/9/9@11:46:24",
      "question" : {
        "value" : "What is a memorable thing you have ever read?"
      }
    },
    "-MGmgooXHLgksvCvmh1u" : {
      "answer" : {
        "value" : "By reading we can learn more about people, places and the past\nIt allows us to explore things we don’t know about. To expand our understanding and horizons\nIt also allows us to learn more about ourselves - our thoughts and feelings"
      },
      "date" : "2020/9/9@11:49:47",
      "question" : {
        "value" : "Can you tell me a good reason for reading?"
      }
    },
    "-MGmuRw91EtMYpQuhiYG" : {
      "answer" : {
        "value" : "A book that changed my life is David Herlihy and Christiane Klapisch-Zuber's Tuscans and Their Families: A Study of the Florentine Catasto of 1427. It was the first book I encountered based on a digital humanities approach. It showed me that computers could help greatly in the study of Humanities subjects like literature and history.\nIn addition, Tuscans and Their Families is full of fascinating details on the everyday life of late medieval Tuscany, including the tax returns of famous artists like Donatello and Brunelleschi, and of the ruling De Medici family."
      },
      "date" : "2020/9/9@12:49:19",
      "question" : {
        "value" : "What is a book that changed your life and why?"
      }
    },
    "-MGn6Jo9j4t1FPwF4UtZ" : {
      "answer" : {
        "value" : "Joseph Conrad’s heart of Darkness\nIt’s set in Africa in the late 19th century, and exposes the cruelty of colonialism\nThe narrator goes on a journey up the Congo river"
      },
      "date" : "2020/9/9@13:45:33",
      "question" : {
        "value" : "What is a book that changed your life and why?"
      }
    },
    "-MH2G2VEwdnw4avFq79c" : {
      "answer" : {
        "value" : "To learn about new topics"
      },
      "date" : "2020/9/12@17:1:59",
      "question" : {
        "value" : "Can you tell me a good reason for reading?"
      }
    },
    "-MH7QAJ7ENyHpQK9y8cv" : {
      "answer" : {
        "value" : "To relax and enjoy adventures I cannot experience in real life"
      },
      "date" : "2020/9/13@17:4:19",
      "question" : {
        "value" : "Can you tell me a good reason for reading?"
      }
    },
    "-MHBlFvg66SmielMMzkZ" : {
      "answer" : {
        "value" : "I’m re-reading ‘Ring of Fire’ by Lawrence Blair\nIt’s a book about his extended travels in Indonesia in the 1970s and 1980s\nThe book was also the material for an award winning TV documentary series called ‘Ring of Fire’\nLawrence Blair travelled to some of the remotest regions of Indonesia and encountered remote people and traditional ways of life"
      },
      "date" : "2020/9/14@13:19:18",
      "question" : {
        "value" : "What are you reading today and why?"
      }
    },
    "-MHC_TkSuBCYpvh81Na4" : {
      "answer" : {
        "value" : "I am reading Alessandro Manzoni's I promessi sposi because I want to see how he describes the 1630 plague epidemic"
      },
      "date" : "2020/9/14@17:7:26",
      "question" : {
        "value" : "What are you reading today and why?"
      }
    },
    "-MHHo0JFu22VWYHX0bE7" : {
      "answer" : {
        "value" : "I remember reading a non-fiction book, Alessandro Manzoni's Storia della Colonna Infame as part of my Italian Literature exam at university. A few days after finishing it I visited Milan, where the book is set, and read one of the inscriptions mentioned by Manzoni. It celebrated  the torture and execution of two men during the 1630 plague epidemic. Manzoni's Storia della Colonna Infame demonstrated that they were falsely accused of spreading the plague and did not deserve to suffer and die. I did not know the inscription had survived. Reading it brought me close to tears and reminded me of the reality of those tragic events.\nBefore reading the book, I had heard sections of it read in class by my Italian Literature professor, Ezio Raimondi. I then read the book and finally the inscription in Milan. Together they made an indelible impression on me."
      },
      "date" : "2020/9/15@17:29:4",
      "question" : {
        "value" : "Do you have a memory of reading that you would like to share?"
      }
    },
    "-MHbYaF8kbEB564keBxd" : {
      "answer" : {
        "value" : "question\nI remember reading Robert Louis Stevenson’s The Black Arrow when I was 13. It became my favourite book and I must have read it at least 10 times before I turned 14.\nI remember reading Robert Louis Stevenson’s The Black Arrow when I was 13. It became my favourite book and I must have read it at least 10 times before I turned 14."
      },
      "date" : "2020/9/19@18:9:20",
      "question" : {
        "value" : "Do you have a memory of reading that you would like to share?"
      }
    },
    "-MI_JUP-Jyibjeqs05Ai" : {
      "answer" : {
        "value" : "To have fun."
      },
      "date" : "2020/10/1@17:59:47",
      "question" : {
        "value" : "Can you tell me a good reason for reading?"
      }
    },
    "-MJ606AcaPDjV0jaNFtn" : {
      "answer" : {
        "value" : "the zen and the art of motorcycle maintenance, it is a story of in-depth self-reflection of a person that tries to understand his life and relations with his family after loosing his memory"
      },
      "date" : "2020/10/8@7:2:13",
      "question" : {
        "value" : "What is a memorable thing you have ever read?"
      }
    },
    "-MJ61bqoAhD964TtOC0_" : {
      "answer" : {
        "value" : "A web novel about a reading and an horror like reality realising the novel. It presents interesting angles about the attitude of a reader toward life and others, as beyond a \"fourth wall\", and the tensions of becoming a writer\nit combines all the things i like in terms of stimuli for reflection but wrapped in a cool fantasy scenario"
      },
      "date" : "2020/10/8@7:8:49",
      "question" : {
        "value" : "What are you reading today and why?"
      }
    },
    "-MJ62IlphZ2n2E5rX-fj" : {
      "answer" : {
        "value" : "well, you can take your time, it is a conversation or an adventure you can resume anytime"
      },
      "date" : "2020/10/8@7:11:49",
      "question" : {
        "value" : "Can you tell me a good reason for reading?"
      }
    },
    "-MJ8bS8jvnsBjyM6l1RY" : {
      "answer" : {
        "value": "I am reading Judith Herrin’s Byzantium because I am interested in the history of the Byzantine Empire"
      },
      "date": "2020/10/8@19:8:59",
      "question" : {
        "value": "What are you reading today and why?"
      }
    }
  };


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

const results = Object.keys(data).reduce( (c,k) => {
  const r = Object.assign({},context,aData,{"co:answer": Object.assign({}, aData["co:answer"]) });
  const entry = Object.assign({},data[k]);

//   console.log(entry, r)

  entry.id = `chatbot-${hash(entry.question.value)}`;

  entry.answerId = entry.id.concat("-",hash(entry.answer.value));
//   console.log(entry);

  /**** QUESTION-ANWER ENTRY ****/
  r["@id"] = r["@id"].concat(entry.id);
  r["co:answer"]["@id"] = r["co:answer"]["@id"].concat(entry.answerId);

//   console.log(r["@id"],r["co:answer"]["@id"]);

  // fill the question name
  r["schema:name"] = entry.question.value;
  r["co:answer"]["co:producedBy"] = r["@id"];
  r["co:answer"]["schema:text"] = entry.answer.value;
  r["co:answer"]["schema:datePublished"] = entry.date;

  // add presets
  let preset = {}
  if(questions[hash(entry.question.value)]){
    preset = Object.assign({},questions[hash(entry.question.value)].preset);
  }

  c[k] = Object.assign({},r,preset);
  return c;
},{});

console.log(JSON.stringify(results) );
