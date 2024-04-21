const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  function getSum(freelancers){
    let sum = 0;
    for(let i=0; i < freelancers.price.length; i++){
    sum += freelancers.price[i];
    }
    return sum;
  }
  //why does adding the parantheses break the code?
  getSum;
  //tried using the sum variable and it said it wasn't accessible despite returning it from the function?
  const priceAvg = getSum / freelancers.length;
  console.log(priceAvg);


  const freeLancerInfo = document.getElementById("freeLancerTable");
  let htmlContent = "<tc>";

  freelancers.forEach(freelancer =>{
    htmlContent += "<td>" + freelancer.name + "</td>";
  });
  htmlContent += "</tc>";
  freelancers.forEach(freelancer =>{
    htmlContent += "<td>" + freelancer.price + "</td>";
  });
  freelancers.forEach(freelancer =>{
    htmlContent += "<td>" + freelancer.occupation + "</td>";
  });


  freeLancerTable.innerHTML = htmlContent;
  // + " " + freelancer.price +" " + freelancer.occupation