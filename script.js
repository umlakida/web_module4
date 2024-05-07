function calculateFunction() {
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var z = parseFloat(document.getElementById('z').value);
    var a = document.getElementById('a').checked;
    var b = document.getElementById('b').checked;
    var c = document.getElementById('c').checked;

    var result;
    if (a) {
        result = 1 / z + Math.sqrt(Math.abs(Math.cos(x + y) ** 2));
    } else if (b) {
        result = 1 - z / (x ** 2) + (Math.sin(y) ** 2) ** 0.3;
    } else if (c) {
        result = Math.cos(3 * x) / y + z;
    } else {
        alert("Виберіть хоча б один перемикач a, b або c.");
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
    };
    var data = {
        "x": x,
        "y": y,
        "z": z,
        "result": result,
        "name": "Kovtunenko Kn31-2"
    };
    xhr.send(JSON.stringify(data));
}
