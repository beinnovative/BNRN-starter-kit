adb kill-server
adb tcpip 5555
# ask for port number
echo "Enter port number: "
read port

adb connect 192.168.1.$port:5555