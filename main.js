
/*Button event listener so button can oerform an action*/
 
document.querySelector('#buttonClick').addEventListener('click', lyric)
     
/* function -> instructions pic of the day */
    function lyric(){
      //  variable usierInput to contain the date of input
      const songInput=document.querySelector('#songName').value
      const artistInput=document.querySelector('#artistName').value
      // variable to hold in API key
      const url = `https://api.lyrics.ovh/v1/${artistInput}/${songInput}`
// func to let the API work//
       fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      // method -> taking in res outputting res.json | taking in date it's the res json |outputting a series of things(console, docqueryselectors)
      // look into late since this was an example Leon told us to use.
      
      console.log(data) 
      console.log(fetch)
      console.log(data.lyrics)
      console.log(songInput)
      console.log(artistInput)

    //   document.querySelector('#songName').innerText = data.songInput 
    //   document.querySelector('#artistName').innerText = data.artistInput
      document.querySelector('h3').innerText =data.lyrics 

     }) 
    //  func for in case of errors
    .catch(err => { 
        console.log(`error ${err}`) 
    });

    }