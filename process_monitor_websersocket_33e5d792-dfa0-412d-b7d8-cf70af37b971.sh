pid_websersocket=$(pgrep -f "websersocket_33e5d792-dfa0-412d-b7d8-cf70af37b971.js")
watch -n 1 ps -p $pid_websersocket -o pid,etime,%cpu,%mem,cmd