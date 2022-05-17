// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
// Only change code below this line
function updateRecords(recordCollection, id, prop, value) {

    if (prop !== "tracks" && value !== "") {
        // console.log("condition 1 met");
        recordCollection[id][prop] = value;
    } else if (prop === "tracks" && !recordCollection[id].hasOwnProperty("tracks")) {
        // console.log("condition 2 met");
        recordCollection[id][prop] = [];
        recordCollection[id][prop].push(value);
    } else if (prop === "tracks" && value !== "") {
        // console.log("condition 3 met");
        recordCollection[id][prop].push(value);
    } else if (value === "") {
      // console.log("condition 4 met");
        delete recordCollection[id][prop];
    }
    
    // console.log(recordCollection);
    return recordCollection;
}


// TESTS

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// artist should be the string ABBA

// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// tracks should have the string Take a Chance on Me as the last and only element.

// updateRecords(recordCollection, 2548, "artist", "");
// artist should not be set

// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
// tracks should have the string Addicted to Love as the last element.

// updateRecords(recordCollection, 2468, "tracks", "Free");
// tracks should have the string 1999 as the first element.

// updateRecords(recordCollection, 2548, "tracks", "");
// tracks should not be set

// updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
// albumTitle should be the string Riptide