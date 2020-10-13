export default class ToJSONLD{

  CONTEXT = {
    "@base":"http://data.open.ac.uk/read-it/",
    "co": "https://github.com/eureadit/crowdsourcing-ontology/raw/master/owl/crowdsourcing-evidences.owl.ttl#",
    "schema": "http://schema.org/",
    "schema:datePublished":{
      "@type": "xsd:date"
    },
    "schema:dateModified":{
      "@type": "xsd:date"
    },
    "schema:datePublished":{
      "@type": "xsd:date"
    },
    "schema:dateModified":{
      "@type": "xsd:date"
    },
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  };

  QUESTION = {
    "@id": "id",
    "@type": "co:Question",
    "co:platform": "where",
    "schema:name": "title",
    "schema:inLanguage": "en",
    "schema:suggestedAnswer": {
      "@id": "id",
      "@type": "schema:Answer",
      "schema:author": "who",
      "co:producedBy": "id",
      "schema:url":"https://read-it.in-two.com/alessio/post/88546348",
      "schema:identifier":"https://read-it.in-two.com/alessio/post/88546348",
      "schema:text":"description",
      "schema:datePublished":"Tue, 18 Aug 2020 09:43:28 +0000",
    	"schema:dateModified":"Tue, 18 Aug 2020 09:43:28 +0000",
    	"schema:inLanguage": "en"
    }
  };

  MEDIA = {
    "@id": "id",
    "@type": "schema:MediaObject",
    "co:platform": "where",
    "schema:name": "title",
    "schema:inLanguage": "en",
    "schema:author": "who",
    "schema:url":"https://read-it.in-two.com/alessio/post/88546348",
    "schema:identifier":"https://read-it.in-two.com/alessio/post/88546348",
    "schema:datePublished":"Tue, 18 Aug 2020 09:43:28 +0000",
  	"schema:dateModified":"Tue, 18 Aug 2020 09:43:28 +0000"
  }

  PLATFORMS = {
    "default": "http://readit-project.org",
    "hub": "https://read-it.in-two.com",
    "bot": "https://t.me/TellMeWhatUReadingbot"
  }

  constructor(campaignID){
    if(typeof campaignID === 'undefined'){
        throw new Error(`Campaign identifier required`);
    }
    if(typeof campaignID !== "string"){
        throw new Error(`Campaign identifier must be a "string", got "${typeof campaignID}"`);
    }
    this.campaignID = campaignID;

  }

  convert(contribution){
    // dynamically indentify type of contribution
    // IF has description and it is not an empty string => Q&A
    // todo should be based on type = photo | form | postcard
    if(contribution.hasOwnProperty("description") && contribution["description"] !== ""){
      // Q&A
      return convertQuestion(contribution);
    }else{
      // Media Object
      return convertMedia(contribution);
    }

  }

  convertMedia(contribution){
    // convert Media Contribution
    if(typeof contribution === 'undefined'){
      throw new Error(`Input must be an object, got "${typeof contribution}"`);
    }
    // add context
    let data = Object.assign({},{"@context":this.CONTEXT},this.QUESTION);

    data["co:isTaskOf"] = this.getCampaign(contribution);
    data["co:platform"] = this.getPlatform(contribution["where"]);

    // manage id
    let ID = this.getID(contribution);
    if(contribution.hasOwnProperty("id") ){
      ID = contribution.ID;
    }
    data["@id"] = data["@context"]["@base"].concat("questions/question-",ID);


    // manage author
    if(contribution.hasOwnProperty("who") ){
      data["schema:author"] = contribution.who;
    }else{
      delete data["schema:author"];
    }

    // manage title
    if(contribution.hasOwnProperty("title") ){
      data["schema:name"] = contribution.title;
    }else{
      delete data["schema:name"];
    }

    // manage pubDate
    if(contribution.hasOwnProperty("pubDate") ){
      data["schema:datePublished"] = contribution.pubDate;
    }else{
      delete data["schema:datePublished"];
    }

    // manage dateUpdated
    if(contribution.hasOwnProperty("dateUpdated") ){
      data["schema:dateModified"] = contribution.dateUpdated;
    }else{
      delete data["schema:dateModified"];
    }

    // manage description
    if(contribution.hasOwnProperty("description") ){
      data["schema:text"] = contribution.description;
    }else{
      delete data["schema:text"];
    }

    // manage sourceURL
    if(contribution.hasOwnProperty("sourceURL") ){
      data["schema:url"] = contribution.sourceURL;
    }else{
      delete data["schema:url"];
    }

    // manage linkURL
    if(contribution.hasOwnProperty("linkURL") ){
      data["schema:identifier"] = contribution.linkURL;
    }else{
      delete data["schema:identifier"];
    }

    // manage language
    if(contribution.hasOwnProperty("language") ){
      data["schema:inLanguage"] = contribution.language;
    }

    return data;
  }

  // todo convert question-answer form web form
  convertQuestion(contribution){
    if(typeof contribution === 'undefined'){
      throw new Error(`Input must be an object, got "${typeof contribution}"`);
    }
    // add context
    let data = Object.assign({},{"@context":this.CONTEXT},this.QUESTION);

    // TODO


    return data;
  }

  // get ID
  getID(contribution){
    return (Math.random() * Math.pow(10, 17)).toString(16).concat(Date.now().toString(16));
  }
  // mapping of where with platforms
  getPlatform(where){
    if(!where || !this.PLATFORM.hasOwnProperty(where) ){return this.PLATFORM.default;}
    return this.PLATFORM[where];
  }
  // todo from tags or period of time
  getCampaign(contribution){
    return "campaign-1";
  }
}

const example1 = {
   "title":"Tagebucheintrag 1979",
   "linkURL":"https://read-it.in-two.com/READIT/post/82979649",
   "sourceURL":"https://read-it.in-two.com/READIT/post/82979649",
   "avatarURL":"https://read-it.in-two.com/media/showavatar?username=READIT&filename=75d8b7bb-c7aa-43a6-803c-cf2301a10b51",
   "mediaThumbURL":"https://read-it.in-two.com/imageurl?id=82979649&width=560&url=https%3A%2F%2Fproc.mymeedia.com%2Fapi%2Fthumb%2Fget%3Fstage%3DREADIT%26uuid%3Db5c4bea2-3b68-45f4-ae00-17ec3f0fc937.JPG",
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
};

const example2 = {
   "title":"During the current COVID-19 pandemic, many of us have turned to books for comfort, reassurance, or escape. What book changed your life, and why?",
   "linkURL":"https://read-it.in-two.com/alessio/post/88546348",
   "sourceURL":"https://read-it.in-two.com/alessio/post/88546348",
   "avatarURL":"https://read-it.in-two.com/media/showavatar?username=alessio",
   "mediaThumbURL":"https://read-it.in-two.com/imageurl?id=88546348&width=560&url=https%3A%2F%2Fread-it.in-two.com%2Fpublic%2Fimages%2Freadit-postcard.png",
   "type":"photo",
   "where":"hub",
   "who":"alessio",
   "description":"A korean light novel \"Omiscient Reader's Viewpoint\" is keeping me company",
   "tags":"Campaign",
   "itemType":"media",
   "file":"",
   "fileName":"",
   "pubDate":"Tue, 18 Aug 2020 09:43:28 +0000",
   "dateUpdated":"Tue, 18 Aug 2020 09:43:28 +0000",
   "language":"Unset",
   "location":{
      "latitude":"0.0",
      "longitude":"0.0",
      "place":"Ungeotagged"
   }
};

let c = new ToJSONLD("test-campaign","test-platform");

console.log(c.convertQuestion(example1) );
console.log(c.convertQuestion(example2) );
