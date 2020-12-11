const request = require('axios').default;

const entries = {
  "-M9J6ul2Ky0IenZ1ZXbh" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3531577084",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3531577084-1137346099",
      "@type" : "co:Answer",
      "co:answerText" : "J.R.R. Tolkien's The Lord of the Rings. The first book I ever read in the English language",
      "co:date" : "2020/6/8@13:30:2",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3531577084"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MBdQb8RfWqXA-vuNOLb" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3531577084",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3531577084-671797186",
      "@type" : "co:Answer",
      "co:answerText" : "Judith Herrin's Byzantium: The Surprising Life of a Medieval Empire",
      "co:date" : "2020/7/7@13:19:30",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3531577084"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MFUyvF_vtQuGB4t9DVn" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2525907429",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2525907429-1392231636",
      "@type" : "co:Answer",
      "co:answerText" : "Reading at the beach when I was five\nIt was a book I’d just been bought as it was too cold to go in the sea, so I could sit and read instead",
      "co:date" : "2020/8/24@10:20:23",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2525907429"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share"
  },
  "-MFVcFQx79hE2-28q9H7" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-1103152674",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-1103152674-47492633",
      "@type" : "co:Answer",
      "co:answerText" : "I am reading Patrick Ness's The Ask and the Answer. I am reading it because it is one of my child's favourite books and they suggested I read it as well. It has also won literary awards, so I am curious to evaluate it.\nLast week I read the previous book in Patrick Ness's Chaos Walking trilogy, The Knife of Never Letting Go, which I found excellent",
      "co:date" : "2020/8/24@13:20:57",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-1103152674"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MFVclt--ObLKu5qqdr1" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3552413290",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3552413290-2057567845",
      "@type" : "co:Answer",
      "co:answerText" : "to expand our cognition. There are places in the world, events in history, types of activities that I can never experience in person. By reading about them, I can become more than just what I see with my own eyes.",
      "co:date" : "2020/8/24@13:23:14",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3552413290"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MFfA-7855F84xWH8A-a" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-1103152674",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-1103152674-224718138",
      "@type" : "co:Answer",
      "co:answerText" : "Jenny Uglow's Elizabeth Gaskell, because I need to learn more about this author since I am writing teaching material about her",
      "co:date" : "2020/8/26@14:28:58",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-1103152674"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MFkLdx5fKJTV8X8rj3u" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3114555370-990271658",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading J.K. Rowling’s Harry Potter and the Deathly Hallows at night while I was nursing my newborn baby, holding the book in one hand and the baby in the other\nReading helped me to stay awake at a time when I was getting very little sleep",
      "co:date" : "2020/8/27@14:37:59",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MFvYgckzY-x1DlzZBFN" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2618103744",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2618103744-91423778",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading most of Jules Verne’s novels when I was in middle school. A relative had given Around the World in Eighty Days to my brother as a present. He did not like it, so he passed it on to me. I devoured it and then read through the Verne section of my local library.",
      "co:date" : "2020/8/29@18:50:47",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2618103744"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have memory of reading that would you like to share?"
  },
  "-MGA5-umWDDW1qlokZVB" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2873582813-1263015542",
      "@type" : "co:Answer",
      "co:answerText" : "I am reading Elizabeth Gaskell’s Mary Barton, because I am writing a book chapter about it",
      "co:date" : "2020/9/1@19:15:1",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MGPYqiqQJ6x8Izq2pjW" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2618103744",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2618103744-33651843",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading Naomi Novik’s Uprooted while visiting Kraków in Poland. While the book is a fantasy novel, it is inspired by Polish folklore. I was able to recognise several locations based on Kraków landmarks, which enhanced my enjoyment of the novel.",
      "co:date" : "2020/9/4@19:19:42",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2618103744"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have memory of reading that would you like to share?"
  },
  "-MGhLdptbu8NaDd9dZPk" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2618103744",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2618103744-3506131909",
      "@type" : "co:Answer",
      "co:answerText" : "Yes. When I was growing up I enjoyed reading books about sharks.\nIt was after I wrote a school project about great white sharks.",
      "co:date" : "2020/9/8@10:54:48",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2618103744"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have memory of reading that would you like to share?"
  },
  "-MGmg2Q7RJIrtwNJjQak" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3114555370-495636315",
      "@type" : "co:Answer",
      "co:answerText" : "Yes I recently read the novel by Albert Camus, The Plague\nIt’s very relevant to our lives with quarantine today\nIt’s set in Algeria and the there is an outbreak of the bubonic plague\nSo people have to quarantine, like we have done during the current COVID pandemic",
      "co:date" : "2020/9/9@11:46:24",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MGmgooXHLgksvCvmh1u" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2317837603-2563454711",
      "@type" : "co:Answer",
      "co:answerText" : "By reading we can learn more about people, places and the past\nIt allows us to explore things we don’t know about. To expand our understanding and horizons\nIt also allows us to learn more about ourselves - our thoughts and feelings",
      "co:date" : "2020/9/9@11:49:47",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MGmuRw91EtMYpQuhiYG" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3623227603-214348918",
      "@type" : "co:Answer",
      "co:answerText" : "A book that changed my life is David Herlihy and Christiane Klapisch-Zuber's Tuscans and Their Families: A Study of the Florentine Catasto of 1427. It was the first book I encountered based on a digital humanities approach. It showed me that computers could help greatly in the study of Humanities subjects like literature and history.\nIn addition, Tuscans and Their Families is full of fascinating details on the everyday life of late medieval Tuscany, including the tax returns of famous artists like Donatello and Brunelleschi, and of the ruling De Medici family.",
      "co:date" : "2020/9/9@12:49:19",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MGn6Jo9j4t1FPwF4UtZ" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3623227603-1932748483",
      "@type" : "co:Answer",
      "co:answerText" : "Joseph Conrad’s heart of Darkness\nIt’s set in Africa in the late 19th century, and exposes the cruelty of colonialism\nThe narrator goes on a journey up the Congo river",
      "co:date" : "2020/9/9@13:45:33",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MH2G2VEwdnw4avFq79c" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2317837603-2760368425",
      "@type" : "co:Answer",
      "co:answerText" : "To learn about new topics",
      "co:date" : "2020/9/12@17:1:59",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MH7QAJ7ENyHpQK9y8cv" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2317837603-1049620552",
      "@type" : "co:Answer",
      "co:answerText" : "To relax and enjoy adventures I cannot experience in real life",
      "co:date" : "2020/9/13@17:4:19",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MHBlFvg66SmielMMzkZ" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2873582813-2379516936",
      "@type" : "co:Answer",
      "co:answerText" : "I’m re-reading ‘Ring of Fire’ by Lawrence Blair\nIt’s a book about his extended travels in Indonesia in the 1970s and 1980s\nThe book was also the material for an award winning TV documentary series called ‘Ring of Fire’\nLawrence Blair travelled to some of the remotest regions of Indonesia and encountered remote people and traditional ways of life",
      "co:date" : "2020/9/14@13:19:18",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MHC_TkSuBCYpvh81Na4" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2873582813-4103049982",
      "@type" : "co:Answer",
      "co:answerText" : "I am reading Alessandro Manzoni's I promessi sposi because I want to see how he describes the 1630 plague epidemic",
      "co:date" : "2020/9/14@17:7:26",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MHHo0JFu22VWYHX0bE7" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-443495873-2282467460",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading a non-fiction book, Alessandro Manzoni's Storia della Colonna Infame as part of my Italian Literature exam at university. A few days after finishing it I visited Milan, where the book is set, and read one of the inscriptions mentioned by Manzoni. It celebrated  the torture and execution of two men during the 1630 plague epidemic. Manzoni's Storia della Colonna Infame demonstrated that they were falsely accused of spreading the plague and did not deserve to suffer and die. I did not know the inscription had survived. Reading it brought me close to tears and reminded me of the reality of those tragic events.\nBefore reading the book, I had heard sections of it read in class by my Italian Literature professor, Ezio Raimondi. I then read the book and finally the inscription in Milan. Together they made an indelible impression on me.",
      "co:date" : "2020/9/15@17:29:4",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MHbYaF8kbEB564keBxd" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-443495873-2330574059",
      "@type" : "co:Answer",
      "co:answerText" : "question\nI remember reading Robert Louis Stevenson’s The Black Arrow when I was 13. It became my favourite book and I must have read it at least 10 times before I turned 14.\nI remember reading Robert Louis Stevenson’s The Black Arrow when I was 13. It became my favourite book and I must have read it at least 10 times before I turned 14.",
      "co:date" : "2020/9/19@18:9:20",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MI_JUP-Jyibjeqs05Ai" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2317837603-390029623",
      "@type" : "co:Answer",
      "co:answerText" : "To have fun.",
      "co:date" : "2020/10/1@17:59:47",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MJ606AcaPDjV0jaNFtn" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-3114555370-3973490064",
      "@type" : "co:Answer",
      "co:answerText" : "the zen and the art of motorcycle maintenance, it is a story of in-depth self-reflection of a person that tries to understand his life and relations with his family after loosing his memory",
      "co:date" : "2020/10/8@7:2:13",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MJ61bqoAhD964TtOC0_" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2873582813-3876476452",
      "@type" : "co:Answer",
      "co:answerText" : "A web novel about a reading and an horror like reality realising the novel. It presents interesting angles about the attitude of a reader toward life and others, as beyond a \"fourth wall\", and the tensions of becoming a writer\nit combines all the things i like in terms of stimuli for reflection but wrapped in a cool fantasy scenario",
      "co:date" : "2020/10/8@7:8:49",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MJ62IlphZ2n2E5rX-fj" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2317837603-634384741",
      "@type" : "co:Answer",
      "co:answerText" : "well, you can take your time, it is a conversation or an adventure you can resume anytime",
      "co:date" : "2020/10/8@7:11:49",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MJ8bS8jvnsBjyM6l1RY" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/chatbot-2873582813-579714145",
      "@type" : "co:Answer",
      "co:answerText" : "I am reading Judith Herrin’s Byzantium because I am interested in the history of the Byzantine Empire",
      "co:date" : "2020/10/8@19:8:59",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MJbmvI7rPLsQ1G-bgpB" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/14@15:47:42-chatbot-2317837603-3259075613",
      "@type" : "co:Answer",
      "co:answerText" : "Reading is a great way to escape from current problems, it can take your mind off your problems\nAlso reading helps you develop empathy for others",
      "co:date" : "2020/10/14@15:47:42",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MJbqISqOeHsyDPT5bhq" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/14@16:2:28-chatbot-3114555370-700959492",
      "@type" : "co:Answer",
      "co:answerText" : "a memorable thing I have read are the inscriptions on the second level of the Basilica of St Clemente in Rome. They are among the very first uses of the Italian language. I read them in school and again many years later in the actual church. The expression \"Fili de le pute, traite\" [Pull, you sons of a whore] is not what you would expect to read in a church and has remained in my memory",
      "co:date" : "2020/10/14@16:2:28",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MJbrK5rws-323L1Awd_" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/14@16:6:57-chatbot-3623227603-224913908",
      "@type" : "co:Answer",
      "co:answerText" : "A book that changed my life is Dante's Divine Comedy. It is certainly the greatest book I have ever read and made me realise the incredible power of the written word to challenge, motivate, move, inspire and empower us readers\nIt also helped me obtain top grades in many university exams!",
      "co:date" : "2020/10/14@16:6:57",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MJgxu0QqlpUK6cGXBNc" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/15@15:53:47-chatbot-2317837603-2320942433",
      "@type" : "co:Answer",
      "co:answerText" : "It helps me to find out more about the world",
      "co:date" : "2020/10/15@15:53:47",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MJmKWCQVPiSdwi123G8" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/16@16:55:3-chatbot-2873582813-2870131091",
      "@type" : "co:Answer",
      "co:answerText" : "Today I am reading Garth Nix's Sabriel. It is a Young Adult novel that I read in the past in moments of stress. I find it always helps me cope with pressure.",
      "co:date" : "2020/10/16@16:55:3",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MJmW3YOQgd_zdzSmC_J" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/16@17:45:31-chatbot-443495873-1447882596",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading Ludovico Ariosto's Orlando Furioso while on holidays. I started with my own paper copy, then borrowed one from a library, then finished it reading on a mobile device",
      "co:date" : "2020/10/16@17:45:31",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MJmWH7eFJVwoDCkZPuN" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/16@17:46:26-chatbot-3623227603-2371016685",
      "@type" : "co:Answer",
      "co:answerText" : "A book that changed my life is Neil Gaiman's comic book The Sandman. It led me to study comics instead of focusing on medieval history, which was my first interest.",
      "co:date" : "2020/10/16@17:46:26",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MK-_M9aA5-jaQFBOUys" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/19@11:18:56-chatbot-3623227603-1179213032",
      "@type" : "co:Answer",
      "co:answerText" : "Jonathan Littell: Les bienveillantes. Offers a (possible) insight in how people can become part of EVIL.",
      "co:date" : "2020/10/19@11:18:56",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MK0eQWvJpObntqcOqc4" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/19@16:20:43-chatbot-443495873-2699149863",
      "@type" : "co:Answer",
      "co:answerText" : "When I was five I used to read comics silently but my family wouldn’t believe I was actually reading! I was, but too shy to read aloud! Finally my aunt, who was a schoolteacher, managed to convince me to show that I was able to read.",
      "co:date" : "2020/10/19@16:20:43",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MK1L1Ffno-UbSs1kqKO" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/19@19:31:13-chatbot-3114555370-4187912489",
      "@type" : "co:Answer",
      "co:answerText" : "hmmm Fictions (Borges)\nI read it in Spanish... \"La Biblioteca de Babel\" was among my favorite short stories at the time (2003-2004)",
      "co:date" : "2020/10/19@19:31:13",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MK3rJfwfribsUZA18Vz" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/20@7:15:54-chatbot-2317837603-293908439",
      "@type" : "co:Answer",
      "co:answerText" : "I like to read to relax",
      "co:date" : "2020/10/20@7:15:54",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MK3rZBRj0L-Zs6uJ5dF" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/20@7:16:57-chatbot-3623227603-3354325139",
      "@type" : "co:Answer",
      "co:answerText" : "Catcher in the rye. It showed me a different side to society, and that that is okay.",
      "co:date" : "2020/10/20@7:16:57",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MK4F8_CCbsueTrZIe6P" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/20@9:4:22-chatbot-2317837603-1003993802",
      "@type" : "co:Answer",
      "co:answerText" : "a good reason for reading is to be entertained in a stimulating and active way. Reading is having fun and thinking at the same time",
      "co:date" : "2020/10/20@9:4:22",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MK5VYIAKLpVEkcjUju-" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/20@14:55:39-chatbot-2317837603-1225163327",
      "@type" : "co:Answer",
      "co:answerText" : "Learning new viewpoints",
      "co:date" : "2020/10/20@14:55:39",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MK5YtwcxXjg78Hg_oWT" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/20@15:10:18-chatbot-3114555370-2681230437",
      "@type" : "co:Answer",
      "co:answerText" : "a memorable thing i read was called how to not be anoyend by a chatbot",
      "co:date" : "2020/10/20@15:10:18",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MK5YyyfhJYwiuAPDHj7" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/20@15:10:39-chatbot-3623227603-2788977262",
      "@type" : "co:Answer",
      "co:answerText" : "one book that changed my life is Rachel Smythe's Lore Olympus. This webcomic made me discover the world of mobile-based digital comics on the platform Webtoons. Lore Olympus and other titles are now part of my daily routine. I read them in the evening to reward myself for having worked hard.",
      "co:date" : "2020/10/20@15:10:39",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MK6Ah0_q6tpvmLCcQUL" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/20@18:4:11-chatbot-443495873-1803919503",
      "@type" : "co:Answer",
      "co:answerText" : "reading Voyage au bout de la nuit by Louis Ferdinand Céline : a Reader’s Life changing expérience",
      "co:date" : "2020/10/20@18:4:11",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MKEfOudDTc8khwln_Og" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/22@9:39:39-chatbot-2317837603-3854233855",
      "@type" : "co:Answer",
      "co:answerText" : "Escape reality for a while",
      "co:date" : "2020/10/22@9:39:39",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MKEfxNqC_5x1aiSlAtM" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/22@9:42:4-chatbot-3114555370-3691930447",
      "@type" : "co:Answer",
      "co:answerText" : "So many I cannot choose",
      "co:date" : "2020/10/22@9:42:4",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MKEgMg7GkCdzavRTGhk" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/22@9:43:52-chatbot-2873582813-38316559",
      "@type" : "co:Answer",
      "co:answerText" : "Essays about cheap print for professional reasons",
      "co:date" : "2020/10/22@9:43:52",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MKWSuNzxFr3hDIRvAHY" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/25@20:33:52-chatbot-2873582813-519778150",
      "@type" : "co:Answer",
      "co:answerText" : "Surrounded by psychopaths\nSuggested",
      "co:date" : "2020/10/25@20:33:52",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MKjB8Dmj2wlaMg-1KCS" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/28@12:30:55-chatbot-2317837603-2333545464",
      "@type" : "co:Answer",
      "co:answerText" : "To learn more about other cultures, societies and historical periods\nIt means I can find out about things I can’t experience in person\nIt allows me to imagine what life is like for other people",
      "co:date" : "2020/10/28@12:30:55",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbo",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MKjCXY2p4ZVUls8ojg7" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/10/28@12:37:1-chatbot-2317837603-3838192309",
      "@type" : "co:Answer",
      "co:answerText" : "It helps to broaden your horizons",
      "co:date" : "2020/10/28@12:37:1",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbo",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-ML8RmgJuIzQCXChN7-r" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/2@14:53:47-chatbot-2873582813-1747112808",
      "@type" : "co:Answer",
      "co:answerText" : "The History Jeepers by Damien Dibben, with my eleven year old son\nThe Two Mrs Abbotts",
      "co:date" : "2020/11/2@14:53:47",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MLHlOsEvOcUS9gmn3D4" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/4@10:20:25-chatbot-2317837603-3922347410",
      "@type" : "co:Answer",
      "co:answerText" : "Reading is essential for my existence... \n\nSo a good reason for reading in Pandemic is distraction and coping\nIn the pandemic people spend more and more time on their computers so holding a printed book and reading something seems to be relaxing and distracting - it is a change of medium and format.",
      "co:date" : "2020/11/4@10:20:25",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MLHlS_YHwRaJG9brpM_" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
    "@type" : "co:Question",
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/4@10:20:40-chatbot-5381-5381",
      "@type" : "co:Answer",
      "co:answerText" : "",
      "co:date" : "2020/11/4@10:20:40",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : ""
  },
  "-MLHmAks1wU0ELtaOLzD" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/4@10:23:50-chatbot-443495873-3809479697",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading a medieval document while helping a friend on her research. The document was the official list of professors for the 1378 academic year at the University of Bologna. I remember the awareness of gazing through a window onto the past of the university where I too was a student. I also remember the extraordinary feeling of the old parchment in my hands. It had been folded in four and was rigid but still sturdy. I opened it carefully, afraid of breaking it, while my friend took notes. I remember that, for an official document, it looked untidy and difficult to read. I was studying medieval palaeography but struggled to make out more than a few words.",
      "co:date" : "2020/11/4@10:23:50",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MLN6FGqzWpTkfZBAz6Z" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/5@11:13:59-chatbot-2317837603-1123306609",
      "@type" : "co:Answer",
      "co:answerText" : "It helps to broaden your thinking",
      "co:date" : "2020/11/5@11:13:59",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/OUchatbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MLN7K5PsgvAE8rLSNTj" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Habit", "reo:Aim" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/5@11:18:41-chatbot-3623227603-2646481701",
      "@type" : "co:Answer",
      "co:answerText" : "A book that changed my life was Italo Calvino's Se una notte d'inverno un viaggiatore (If on a Winter's Night a Traveller). It allowed me to finally understand postmodernism",
      "co:date" : "2020/11/5@11:18:41",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3623227603",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/OUchatbot",
    "co:text" : "What is a book that changed your life and why?"
  },
  "-MLN7bkUbiJkgKL8LV8E" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/5@11:19:58-chatbot-443495873-3331729296",
      "@type" : "co:Answer",
      "co:answerText" : "Yes I remember reading Arundhati Roy’s The God of Small Things on holiday in Turkey",
      "co:date" : "2020/11/5@11:19:58",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/OUchatbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MLN8QMZoRO17aUH1zLS" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/5@11:23:29-chatbot-443495873-3464112682",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading Wilkie Collins's The Moonstone shortly after a bereavement. I found it by chance in the discount section of the university bookshop. Its engrossing plot and multi-strand narrative gripped me from the very start. Reading The Moonstone allowed me to step away from my grief and enjoy myself for a while, in turn making it easier to deal with my pain.",
      "co:date" : "2020/11/5@11:23:29",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/OUchatbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MLN8QPgIyKg93w2D2ez" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/5@11:23:29-chatbot-443495873-870425504",
      "@type" : "co:Answer",
      "co:answerText" : "Reading in the special collections library at university for the first time.",
      "co:date" : "2020/11/5@11:23:29",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/OUchatbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MLN8ibr4-IcQfrm33QJ" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Achievment" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/5@11:24:48-chatbot-2317837603-1721890730",
      "@type" : "co:Answer",
      "co:answerText" : "To learn more about others, and myself",
      "co:date" : "2020/11/5@11:24:48",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2317837603",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/OUchatbot",
    "co:text" : "Can you tell me a good reason for reading?"
  },
  "-MLN8yNd6SGebb6JMgIR" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/5@11:25:52-chatbot-3114555370-3333992458",
      "@type" : "co:Answer",
      "co:answerText" : "Reading Chinua Achebe’s Things Fall Apart as a 13 year old schoolboy",
      "co:date" : "2020/11/5@11:25:52",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/OUchatbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MLhTrf5WUsaJIwAGGRG" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/9@14:49:11-chatbot-443495873-99573540",
      "@type" : "co:Answer",
      "co:answerText" : "The summer after my graduation, I read Arturo's island by Elsa Morante while I was on holiday at a friend's beach house. Everyone else in the house was napping and I read most of the book in one session, in the crazy heat of an Italian summer afternoon. I have strong memories of absolute peace of mind and gratitude connected to that one particular reading session.",
      "co:date" : "2020/11/9@14:49:11",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MMRW1Sz9p7ZAlLvF97Z" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/18@18:0:49-chatbot-3114555370-1577295657",
      "@type" : "co:Answer",
      "co:answerText" : "House of Leaves\nIt was such a unique book: played with the concept of writing and reading. It's definitely not the best book I've read, but it was interesting, memorable and an experience to read it",
      "co:date" : "2020/11/18@18:0:49",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MMRbhrh2F9nXGC5D89z" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/18@18:30:0-chatbot-443495873-2582348701",
      "@type" : "co:Answer",
      "co:answerText" : "I remember reading Dante's Paradiso during the night of 3-4 November 2020 while waiting for the result of the US presidential election. Reading Paradiso VI on Emperor Justinian and Dante's conception of what a just ruler should be was strangely reassuring during a very tense time.",
      "co:date" : "2020/11/18@18:30:0",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MMSbZRhHBFObCqsmYf0" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/18@23:8:58-chatbot-2873582813-2438781734",
      "@type" : "co:Answer",
      "co:answerText" : "The conquest of happiness from Bertrand Russel- trying to understand our society today",
      "co:date" : "2020/11/18@23:8:58",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MMSbdsKruVkGg60KmGI" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
    "@type" : "co:Question",
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/18@23:9:21-chatbot-5381-5381",
      "@type" : "co:Answer",
      "co:answerText" : "",
      "co:date" : "2020/11/18@23:9:21",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : ""
  },
  "-MMSbo4TUP--5EclRlCs" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
    "@type" : "co:Question",
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/18@23:10:2-chatbot-5381-5381",
      "@type" : "co:Answer",
      "co:answerText" : "",
      "co:date" : "2020/11/18@23:10:2",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : ""
  },
  "-MMSdUwUJOJZTl472Z7z" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:StateOfMind", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/18@23:17:24-chatbot-2873582813-3748917871",
      "@type" : "co:Answer",
      "co:answerText" : "Life inside my mind- to understand mental health\nBeen reading a lot about the subject since starting therapy",
      "co:date" : "2020/11/18@23:17:24",
      "co:distance" : "close",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-2873582813",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What are you reading today and why?"
  },
  "-MMUt72uRYIkfcDHAVEp" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/19@9:44:55-chatbot-443495873-3660417932",
      "@type" : "co:Answer",
      "co:answerText" : "Yes, my memory of reading books to my son at night is special. We ended of with 'Danny Champion of the world' by Roald Dahl, and before that, it was 'The BFG'.\nMy son is now 18 and enjoys reading, although mostly online. I try to still buy him printed books on the topic of his interest, and in the house of course there is lots of books.\nMy own first memory of a story book which I enjoyed was a book of world fairy tales.\nThese fairy tales were illustrated grandly, and were short stories about exotic countries and princesses, giants, wolves, fairies etc.\nOther stories I recall was a book on life in the circus, which left me with a permanent love for the circus. It told a human story about life behind the scenes and how difficult it was to travel with the circus. It gave me huge empathy for circus people.",
      "co:date" : "2020/11/19@9:44:55",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MMUth5KXFCM62bRjfM7" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/19@9:47:27-chatbot-3114555370-500862923",
      "@type" : "co:Answer",
      "co:answerText" : "Isabel Allende, The house of the spirits; I also enjoy all the books of Gabriel Garcia Marques. The world of magical realism interests me\nA South African author wrote 'Cry the beloved country', a very moving book. JM Coetzee also have written very moving books.",
      "co:date" : "2020/11/19@9:47:27",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MMUtiX_wxkp8L3MqSEY" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
    "@type" : "co:Question",
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/19@9:47:33-chatbot-5381-5381",
      "@type" : "co:Answer",
      "co:answerText" : "",
      "co:date" : "2020/11/19@9:47:33",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-5381",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : ""
  },
  "-MMWnX5RfFm4mW95bivx" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Memory", "reo:Content", "reo:ReadingProcess" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/19@18:39:43-chatbot-443495873-2730370667",
      "@type" : "co:Answer",
      "co:answerText" : "crossimg to santorini from crete on a cloudy day, reading Neil Gaiman's American Gods. It felt oddly right.",
      "co:date" : "2020/11/19@18:39:43",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-443495873",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "Do you have a memory of reading that you would like to share?"
  },
  "-MMWoBYXV1RHzkxji4th" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/11/19@18:42:37-chatbot-3114555370-2943811169",
      "@type" : "co:Answer",
      "co:answerText" : "The Hobbit\nI read it at age 11, and it opened a door onto the power of reading to take you away from your own world, whilst giving you lessons on how to live - courage, friendship, honesty - and how to talk to dragons, of course.\nI still read the Hobbit now, some 40ish years later, just every couple of years, it always cheers me.",
      "co:date" : "2020/11/19@18:42:37",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  },
  "-MO0uFS3SbXNXA8BQrNh" : {
    "@context" : {
      "@base" : "http://data.open.ac.uk/read-it/",
      "co" : "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
      "reo" : "https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
    },
    "@id" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
    "@type" : "co:Question",
    "co:aboutConcept" : [ "reo:Content", "reo:Memory" ],
    "co:answer" : {
      "@id" : "http://data.open.ac.uk/read-it/answers/2020/12/8@10:32:39-chatbot-3114555370-2974269769",
      "@type" : "co:Answer",
      "co:answerText" : "This is a silly frilly test",
      "co:date" : "2020/12/8@10:32:39",
      "co:distance" : "distant",
      "co:inLanguage" : "en-GB",
      "co:isAnswerOf" : "http://data.open.ac.uk/read-it/questions/chatbot-3114555370",
      "co:platform" : "https://t.me/TellMeWhatUReadingbot"
    },
    "co:inLanguage" : "en-GB",
    "co:platform" : "https://t.me/TellMeWhatUReadingbot",
    "co:text" : "What is a memorable thing you have ever read?"
  }
};

const username = "to be filled",
    url = "to be filled"


sendingData(entries);

// console.log(entries);
async function sendingData(entries){
  for(let k in entries){
    // console.log(k);
    await sendData(entries[k]);
    // await mimicSendingData(entries[k]);
  } 
  console.log("done");
  await checkData();
}  

async function mimicSendingData (data) {
  console.log(data);
}

async function sendData(data) {
  // datahub 
    // send data
    await request({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      url,
      data,
      auth: {
        username
      }
    }).then((response) => {
      console.log(response);
    }).catch(err=>{
      console.error(err);
    });

}
async function checkData(){
    await request({
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        url:"https://api.mksmart.org/data/query/6d40f3ca-e005-477e-9558-ba611ac5f818",
        auth: {
          username: "2949768d-5130-454a-b20f-6494ab0cfaf2"
        }
      }).then((response) => {
        console.log(response.status, response.statusText);
        console.log(response.data);
      }).catch(err=>{
        console.error("ERROR: ",err.response.status,err.response.statusText);
      });
}

