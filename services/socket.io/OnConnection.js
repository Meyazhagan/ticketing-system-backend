module.exports = (io) => {
    return (socket) => {
        console.log(socket.id, "is connected");

        socket.on("disconnecting", () => {
            console.log(socket.id, "is dis connected");
        });
    };
};
