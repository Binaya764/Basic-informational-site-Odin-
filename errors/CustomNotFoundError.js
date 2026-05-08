class CustomNotFoundError extends Error{
    constuctor(message){
        //super(message);
        this.statusCode = 404;
        this.name = "NotFoundError";
    }
}

module.exports = CustomNotFoundError;