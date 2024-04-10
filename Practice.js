console.log('ANTO DIVYA DARSHINI X');
const http = require('http');
const url = require('url');
const users = [
{ username: "anto", password: "23mca0100" },
{ username: "xavier", password: "telnet" },
{ username: "aswin", password: "msdhoni" },
];
function validate(username, password) {
return users.some(user => user.username === username && user.password ===
password);
} const server =
http.createServer((req, res) => {
if (req.url.startsWith('/login')) {
const queryObject = url.parse(req.url, true).query;
const username = queryObject.username;
const password = queryObject.password;
if (username && password) {
L45+L46
if (validate(username, password))
{
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('ANTO DIVYA DARSHINI X - 23MCA0100 : Authentication successful');
}
else
{
res.writeHead(401, { 'Content-Type': 'text/plain' });
res.end('ANTO DIVYA DARSHINI X - 23MCA0100 : Authentication failed');
}
}
else
{
res.writeHead(400, { 'Content-Type': 'text/plain' });
res.end('ANTO DIVYA DARSHINI X - 23MCA0100 : Username and password are
required');
}
}
else
{
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('ANTO DIVYA DARSHINI X - 23MCA0100 : Not found');
}
});
const PORT = 3000;
server.listen(PORT, () =>
{
console.log(`Server running at http://localhost:${PORT}/`);
});