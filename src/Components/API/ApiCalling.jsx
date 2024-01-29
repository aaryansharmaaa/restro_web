 //data fetching for the famous component ......
 
 export const fetchdish=async(searchQuery)=>{
   try{
      let data=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=7b7ce482&app_key=c797c722b1514df1da6fb0095fb8761e`);
      let response =await data.json();
      return response;
   }
   catch(e){
      console.log(e, "Some error happen")
      return e;
   }
}
