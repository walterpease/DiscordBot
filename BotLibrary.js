module.exports = {
    post: function(text, message) {
        log(`Posting ${text}`);
    
        message.channel.send(text);
    },
    log: function(text) {
        console.log(text);
    },
}