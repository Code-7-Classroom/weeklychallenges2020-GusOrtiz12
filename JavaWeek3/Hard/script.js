function clientInfo() {
    var pii = {
        name: 'Jose Claudio Padín',
        ssn: '744-58-6924'
    }
    function displayName() {
        console.log(pii.name);
    }
    return displayName;
}

var clientData = clientInfo();
clientData();