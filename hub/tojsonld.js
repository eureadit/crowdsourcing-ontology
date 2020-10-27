// result boilerplait
const results = {
   "@context": {
     "@base":"http://data.open.ac.uk/read-it/",
     "co":"https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
     "reo":"https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl#"
  },
  "@graph":[]
};

const PLATFORMS = {
    "default": "http://readit-project.org",
    "hub": "https://read-it.in-two.com",
    "bot": "https://t.me/TellMeWhatUReadingbot"
  };
const TYPES = {
  "default": "co:MediaResource",
  "photo": "co:MediaResource",
  "co:Question":"co:Question"
}
// sample data
const data = {
   "name":"results",
   "children":[
      {
         "title":"Tagebucheintrag 1979",
         "linkURL":"https://read-it.in-two.com/READIT/post/82979649",
         "sourceURL":"https://read-it.in-two.com/READIT/post/82979649",
         "avatarURL":"https://read-it.in-two.com/media/showavatar?username=READIT&filename=75d8b7bb-c7aa-43a6-803c-cf2301a10b51",
         "mediaThumbURL":"https://read-it.in-two.com/imageurl?id=82979649&width=560&url=https%3A%2F%2Fproc-readit.in-two.com%2Fapi%2Fthumb%2Fget%3Fstage%3DREADIT%26uuid%3Db5c4bea2-3b68-45f4-ae00-17ec3f0fc937.JPG",
         "type":"photo",
         "where":"hub",
         "who":"READIT",
         "description":"",
         "tags":"crowdsourced",
         "itemType":"media",
         "file":"https://read-it.in-two.com/READIT/post/82979649/download",
         "fileName":"b5c4bea2-3b68-45f4-ae00-17ec3f0fc937.JPG",
         "pubDate":"Tue, 09 Jul 2019 14:38:20 +0000",
         "dateUpdated":"Thu, 07 Nov 2019 14:09:21 +0000",
         "language":"",
         "location":{
            "latitude":"0.0",
            "longitude":"0.0",
            "place":"Ungeotagged"
         }
      },
     {
       "title":"During the current COVID-19 pandemic, many of us have turned to books for comfort, reassurance, or escape. What book changed your life, and why?",
       "linkURL":"https://read-it.in-two.com/READIT/post/88547280",
       "sourceURL":"https://read-it.in-two.com/READIT/post/88547280",
       "avatarURL":"https://read-it.in-two.com/media/showavatar?username=READIT&filename=75d8b7bb-c7aa-43a6-803c-cf2301a10b51",
       "mediaThumbURL":"https://read-it.in-two.com/imageurl?id=88547280&width=560&url=https%3A%2F%2Fread-it.in-two.com%2Fpublic%2Fimages%2Freadit-postcard.png",
       "type":"photo",
       "where":"hub",
       "who":"READIT",
       "description":"<div><!--block-->A korean light novel \"Omiscient Reader's Viewpoint\" is keeping me company<\/div>",
       "tags":"Campaign",
       "itemType":"media",
       "file":"",
       "fileName":"",
       "pubDate":"Tue, 18 Aug 2020 09:43:28 +0000",
       "dateUpdated":"Tue, 18 Aug 2020 10:46:29 +0000",
       "language":"Unset",
       "location":{
          "latitude":"0.0",
          "longitude":"0.0",
          "place":"Ungeotagged"
       }
    }
   ],
   "page_current":"1",
   "page_prev":"",
   "page_next":"",
   "page_size":"96",
   "page_total":"1"
};

// console.log(data.children)

try{
  results["@graph"] = data.children.map(d=>{
    // console.log(d);
    const type = (d["type"] && TYPES[d["type"]]) ? TYPES[d["type"]] : TYPES["default"];
    const id = "http://data.open.ac.uk/read-it/".concat(d["where"],"/",d["type"],"-",d["linkURL"].split("/").pop());
    const language = d["language"] ? d["language"] : "unset";
    const platform = (d["where"] && PLATFORMS[d["where"]]) ? PLATFORMS[d["where"]] : PLATFORMS["default"];
    const source = d["file"] ? d["file"].concat("/",d["fileName"]) : "";
    const format = "" + d["fileName"].split('.').pop().toLowerCase().trim();

    const r = {
      "@id": id,
      "@type": type,
      "co:platform": platform,
      "co:title": d["title"],
      "co:inLanguage": language,
      "co:abstract": d["description"],
      "co:url":d["sourceURL"],
      "co:identifier":d["linkURL"],
      "co:date":d["pubDate"],
      "co:modified":d["dateUpdated"],
      "co:contentUrl":source,
      "co:format":format,
      "thumbnail":d["mediaThumbURL"]
    };

    return r;
  });

}catch(e){
  console.error(e);
}


console.log(results);
// console.log(JSON.stringify(results) );
