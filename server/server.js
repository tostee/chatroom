const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const socketio = require("socket.io");
const io = socketio(server, { cors: { origin: "*" } });
const { v4: uuidv4 } = require("uuid");

io.on("connection", (socket) => {
	let username;
	io.emit("server", "asasasasasas");

	socket.on("conected", (user) => {
		username = user.username;
		socket.broadcast.emit("messages", {
			id: uuidv4(),
			user: "server",
			message: `${username} Has join the room`,
		});
	});

	socket.on("logout", () => {
		socket.disconnect();
	});

	socket.on("chat", (user, message) => {
		io.emit("messages", { id: uuidv4(), user, message });
	});

	socket.on("disconnect", () => {
		socket.broadcast.emit("messages", {
			id: uuidv4(),
			user: "server",
			message: `${username} Has left the room`,
		});
	});
});

server.listen(3001, () => console.log("Server Started"));
