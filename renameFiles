function renameFiles(arr){
    var newfileobj = {}
    var newarr = []

    for(i = 0; i < arr.length; i++){
        if(newfileobj[arr[i]]){
           newfileobj[arr[i]] += 1 
           newarr.push(arr[i]+"("+parseInt(newfileobj[arr[i]]-1)+")")
        } else {
          newfileobj[arr[i]] = 1;
          newarr.push(arr[i])

        }
    }
    return newarr
}
