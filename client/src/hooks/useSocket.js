import io from "socket.io-client";

const useSocket = (url = "http://localhost:3001") => {
	return io(url);
};

export default useSocket;
