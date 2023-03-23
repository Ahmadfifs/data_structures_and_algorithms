// array is a contiguous space of memory allocation
// each byte have 8 bits 
let buffer: ArrayBuffer = new ArrayBuffer(16); // create a buffer of length 16

// 32 bit divide by 16 byte = 32 / 16 * 8 = 32 bit / 128 bit = 4
// the result is array of 4 element each have 32 bit 
let view = new Uint32Array(buffer); // treat buffer as a sequence of 32-bit integers

console.log(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes per integer

console.log(view.length); // 4, it stores that many integers
console.log(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 1;

console.log(view)


