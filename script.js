function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	
	let r = parseFloat(document.getElementById("radius").value);
	
	let volume = (4/3) * Math.PI * Math.pow(r,3); 
	// console.log(r, volume)
	
	document.getElementById("volume").value = volume.toFixed(4)
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
