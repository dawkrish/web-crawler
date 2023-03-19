function printReport(pages){
    console.log(`---Report is starting---`)
    let entries = Object.entries(pages);
    let sorted = entries.sort((a, b) => a[1] - b[1]);
    sorted.forEach(element => {
        console.log(`Found ${element[1]} internal links to ${element[0]}`)
    });
    console.log(`---End Report---`)
}

module.exports = {
    printReport
}

