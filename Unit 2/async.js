//Author Taylor Kubik
//date 3/16/2024


async function myFunction()
{
    //vars set to false
    var runner1 = false;
    var runner2 = false;
    //empty string
    var loser = "";
    
    //creating promise with a resolve param
    const runner1Go = new Promise(function(resolve)
    {
        //setting timeout to a anon function
       setTimeout(()=>{
        //loser being set to runner1 if slower
            loser = "runner1";
            //resolve being set to true
            resolve(true);
            //waiting 4 seconds or really however long its set to
        }, 4000);
        
        
    
    });
    
    //creating promise with a resolve param
    const runner2Go = new Promise(function(resolve)
    {
        //timeout method set to a anon function
        setTimeout(()=> {
            //loser being set to runner 2
            loser = "runner2";
            //resolve being set to true
            resolve(true);
            //waiting 3 secs or really however long its set to
        }, 3000)
    });
    
    //return array waiting for both runners then returning the loser variable
    return [await runner1Go, await runner2Go, loser];

    
}
//after the async runs then we give it a anon function param of result
myFunction().then(function(result)
{
//log the result of result array at the end
    console.log(result[result.length - 1]);
    
});