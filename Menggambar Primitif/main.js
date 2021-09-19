function main(){
    var canvas = document.getElementById("myCanvas");

    //--------------------------------------//
    //gambar persegi dari 2 segitiga
    var gl = canvas.getContext("webgl");

    var vertices = [
        -0.8, 0.8,   //Titik A
        -0.8, -0.8,  //Titik B
        0.8, -0.8,   //Titik C
        0.8, -0.8,   //Titik C
        0.8, 0.8,    //Titik D
        -0.8, 0.8   //Titik A
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderCode = document.getElementById("vertexShaderCode").text;

     //membuat vertex shader
     var vertexShader = gl.createShader(gl.VERTEX_SHADER);
     gl.shaderSource(vertexShader, vertexShaderCode);
     gl.compileShader(vertexShader);

     //definisi fragment shader
    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;
    
    //membuat fragment shader
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    //package program --> compile
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    //set warna background
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    //clear background
    gl.clear(gl.COLOR_BUFFER_BIT);

    //instruksi untuk menggambar
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    //-----------------------------------------//
    //gambar garis pembagi
    var context = canvas.getContext("webgl");

    var verticesG = [
        0, 0.8,
        0, -0.8,
        -0.8, 0,
        0.8, 0
    ];

    var positionBufferG = context.createBuffer();
    context.bindBuffer(context.ARRAY_BUFFER, positionBufferG);
    context.bufferData(context.ARRAY_BUFFER, new Float32Array(verticesG), context.STATIC_DRAW);

    var vertexShaderCodeG = document.getElementById("vertexShaderCodeG").text;

    var vertexShaderG = context.createShader(context.VERTEX_SHADER);
    context.shaderSource(vertexShaderG, vertexShaderCodeG);
    context.compileShader(vertexShaderG);

    var fragmentShaderCodeG = document.getElementById("fragmentShaderCodeG").text;

    var fragmentShaderG = context.createShader(context.FRAGMENT_SHADER);
    context.shaderSource(fragmentShaderG, fragmentShaderCodeG);
    context.compileShader(fragmentShaderG);

    var shaderProgramG = context.createProgram();
    context.attachShader(shaderProgramG, vertexShaderG);
    context.attachShader(shaderProgramG, fragmentShaderG);
    context.linkProgram(shaderProgramG);
    context.useProgram(shaderProgramG);

    var aPositionG = context.getAttribLocation(shaderProgramG, "a_PositionG");
    context.vertexAttribPointer(aPositionG, 2, context.FLOAT, false, 0, 0);
    context.enableVertexAttribArray(aPositionG);

    context.drawArrays(context.LINES, 0, 4);

    //-----------------------------------------//
    //gambar segitiga sama kaki
    var SSK = canvas.getContext("webgl");

    var verticesSSK = [
        -0.4, 0.7,
        -0.6, 0.1,
        -0.2, 0.1
    ];

    var positionBufferSSK = SSK.createBuffer();
    SSK.bindBuffer(SSK.ARRAY_BUFFER, positionBufferSSK);
    SSK.bufferData(SSK.ARRAY_BUFFER, new Float32Array(verticesSSK), SSK.STATIC_DRAW);

    var vertexShaderCodeSSK = document.getElementById("vertexShaderCodeS").text;

    var vertexShaderSSK = SSK.createShader(SSK.VERTEX_SHADER);
    SSK.shaderSource(vertexShaderSSK, vertexShaderCodeSSK);
    SSK.compileShader(vertexShaderSSK);

    var fragmentShaderCodeSSK = document.getElementById("fragmentShaderCodeS").text;

    var fragmentShaderSSK = SSK.createShader(SSK.FRAGMENT_SHADER);
    SSK.shaderSource(fragmentShaderSSK, fragmentShaderCodeSSK);
    SSK.compileShader(fragmentShaderSSK);

    var shaderProgramSSK = SSK.createProgram();
    SSK.attachShader(shaderProgramSSK, vertexShaderSSK);
    SSK.attachShader(shaderProgramSSK, fragmentShaderSSK);
    SSK.linkProgram(shaderProgramSSK);
    SSK.useProgram(shaderProgramSSK);

    var aPositionSSK = SSK.getAttribLocation(shaderProgramSSK, "a_PositionS");
    SSK.vertexAttribPointer(aPositionSSK, 2, SSK.FLOAT, false, 0, 0);
    SSK.enableVertexAttribArray(aPositionSSK);

    context.drawArrays(context.LINE_LOOP, 0, 3);

    //-----------------------------------------//
    //gambar segitiga sama sisi
    var SSS = canvas.getContext("webgl");

    var verticesSSS = [
        0.4, 0.6,
        0.1, 0.2,
        0.7, 0.2,
        0.4, 0.6
    ];

    var positionBufferSSS = SSS.createBuffer();
    SSS.bindBuffer(SSS.ARRAY_BUFFER, positionBufferSSS);
    SSS.bufferData(SSS.ARRAY_BUFFER, new Float32Array(verticesSSS), SSS.STATIC_DRAW);

    var vertexShaderCodeSSS = document.getElementById("vertexShaderCodeS").text;

    var vertexShaderSSS = SSS.createShader(SSS.VERTEX_SHADER);
    SSS.shaderSource(vertexShaderSSS, vertexShaderCodeSSS);
    SSS.compileShader(vertexShaderSSS);

    var fragmentShaderCodeSSS = document.getElementById("fragmentShaderCodeS").text;

    var fragmentShaderSSS = SSS.createShader(SSS.FRAGMENT_SHADER);
    SSS.shaderSource(fragmentShaderSSS, fragmentShaderCodeSSS);
    SSS.compileShader(fragmentShaderSSS);

    var shaderProgramSSS = SSS.createProgram();
    SSS.attachShader(shaderProgramSSS, vertexShaderSSS);
    SSS.attachShader(shaderProgramSSS, fragmentShaderSSS);
    SSS.linkProgram(shaderProgramSSS);
    SSS.useProgram(shaderProgramSSS);

    var aPositionSSS = SSS.getAttribLocation(shaderProgramSSS, "a_PositionS");
    SSS.vertexAttribPointer(aPositionSSS, 2, SSS.FLOAT, false, 0, 0);
    SSS.enableVertexAttribArray(aPositionSSS);

    SSS.drawArrays(SSS.LINE_STRIP, 0, 4);

    //-----------------------------------------//
    //gambar segitiga siku-siku
    var SK = canvas.getContext("webgl");

    var verticesSK = [
        -0.6, -0.7,
        -0.6, -0.1,
        -0.2, -0.7
    ];

    var positionBufferSK = SK.createBuffer();
    SK.bindBuffer(SK.ARRAY_BUFFER, positionBufferSK);
    SK.bufferData(SK.ARRAY_BUFFER, new Float32Array(verticesSK), SK.STATIC_DRAW);

    var vertexShaderCodeSK = document.getElementById("vertexShaderCodeS").text;

    var vertexShaderSK = SK.createShader(SK.VERTEX_SHADER);
    SK.shaderSource(vertexShaderSK, vertexShaderCodeSK);
    SK.compileShader(vertexShaderSK);

    var fragmentShaderCodeSK = document.getElementById("fragmentShaderCodeS").text;

    var fragmentShaderSK = SK.createShader(SK.FRAGMENT_SHADER);
    SK.shaderSource(fragmentShaderSK, fragmentShaderCodeSK);
    SK.compileShader(fragmentShaderSK);

    var shaderProgramSK = SK.createProgram();
    SK.attachShader(shaderProgramSK, vertexShaderSK);
    SK.attachShader(shaderProgramSK, fragmentShaderSK);
    SK.linkProgram(shaderProgramSK);
    SK.useProgram(shaderProgramSK);

    var aPositionSK = SK.getAttribLocation(shaderProgramSK, "a_PositionS");
    SK.vertexAttribPointer(aPositionSK, 2, SK.FLOAT, false, 0, 0);
    SK.enableVertexAttribArray(aPositionSK);

    SK.drawArrays(SK.TRIANGLES, 0, 3);

    //gambar segitiga sembarang
    var SS = canvas.getContext("webgl");

    var verticesSS = [
        0.6, -0.5,
        0.3, -0.2,
        0.2, -0.7
    ];

    var positionBufferSS = SS.createBuffer();
    SS.bindBuffer(SS.ARRAY_BUFFER, positionBufferSS);
    SS.bufferData(SS.ARRAY_BUFFER, new Float32Array(verticesSS), SS.STATIC_DRAW);

    var vertexShaderCodeSS = document.getElementById("vertexShaderCodeS").text;

    var vertexShaderSS = SS.createShader(SS.VERTEX_SHADER);
    SS.shaderSource(vertexShaderSS, vertexShaderCodeSS);
    SS.compileShader(vertexShaderSS);

    var fragmentShaderCodeSS = document.getElementById("fragmentShaderCodeS").text;

    var fragmentShaderSS = SS.createShader(SS.FRAGMENT_SHADER);
    SS.shaderSource(fragmentShaderSS, fragmentShaderCodeSS);
    SS.compileShader(fragmentShaderSS);

    var shaderProgramSS = SS.createProgram();
    SS.attachShader(shaderProgramSS, vertexShaderSS);
    SS.attachShader(shaderProgramSS, fragmentShaderSS);
    SS.linkProgram(shaderProgramSS);
    SS.useProgram(shaderProgramSS);

    var aPositionSS = SS.getAttribLocation(shaderProgramSS, "a_PositionS");
    SS.vertexAttribPointer(aPositionSS, 2, SS.FLOAT, false, 0, 0);
    SS.enableVertexAttribArray(aPositionSS);

    SS.drawArrays(SS.TRIANGLES, 0, 3);
}