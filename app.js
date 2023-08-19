// calculate the area
function areaCalcuation(event){
    const inputValue1Text = event.parentNode.childNodes[5].childNodes[1];
    const inputValue2Text = event.parentNode.childNodes[5].childNodes[5];
    
    const input1 = parseFloat(inputValue1Text.value);
    const input2 = parseFloat(inputValue1Text.value);
    
    inputValue1Text.value = '';
    inputValue2Text.value = '';
    if(inputValidation(input1,input2)) {
        return;
    }

    const shapeName = event.parentNode.childNodes[1].innerText;
    let area;
    console.log(shapeName);
    if(shapeName === 'Triangle'|| shapeName === 'Rhombus' || shapeName === 'Pentagon'){
        area = 0.5 * input1 * input2;
    }
    else if(shapeName === 'Rectangle' || shapeName === 'Parallelogram'){
        area = input1 * input2;
    }
    else{
        area = 3.1416 * input1 * input2;
    }

    showCalculatedArea(shapeName, area.toFixed(2));

}

// input validation
function inputValidation(inputValue1,inputValue2){
    if(isNaN(inputValue1) || isNaN(inputValue2) ){
        alert('please enter an number');
        return true;
    }
}


// show the area in the area calculation section

function showCalculatedArea(shapeName,area){
    console.log(shapeName,area);
    const areaList = document.createElement('p');
    const parentOfareaList = document.getElementById('area-list');
    const count = parentOfareaList.childElementCount;
    
    areaList.innerHTML = `
    <span>${count+1}.</span>
    <span>${shapeName}</span>
    <span>${area}</span>
    <span>cm<sup>2</sup></span>
    <button class="bg-emerald-400 px-2 py-1 rounded hover:bg-emerald-300">convert to m<sup>2</sup></button>    
    `;

    const classes = ['flex','justify-between','items-center','mt-2']
    areaList.classList.add(...classes);
    
    parentOfareaList.appendChild(areaList);
    console.log(parentOfareaList.childNodes)
    // convertIntoMeter2(parentOfareaList.childNodes);
    console.log(parentOfareaList.childNodes);
    // for(const child of parentOfareaList.childNodes){
    //     console.log(child.childNodes);
    //     if(child.childNodes.length != 0){
    //         child.childNodes[9].addEventListener('click',function(event){
    //             console.log('i am clicked');
    //             console.log(event.target.parentNode.childNodes[5])
    //             const areaInCm = event.target.parentNode.childNodes[5].innerText;
    //             console.log(areaInCm);
    //             const areaInM = parseFloat(areaInCm) * 0.0001;
    //             event.target.parentNode.childNodes[5].innerText = areaInM.toExponential(2);
    //             const textCm = event.target.parentNode.childNodes[7];
    //             console.log(textCm)
    //             textCm.innerHTML = `m<sup>2<sup>`;
    //             event.target.innerHTML = `<button class="bg-emerald-400 px-2 py-1 rounded hover:bg-emerald-300">convert to cm<sup>2</sup></button>`;
    //         })
    //     }
    //     // if(child.childNodes[4]){
    //     //     // console.log(child);
    //     //     // console.log(child[4]);
    //     //     console.log(child.childNodes[4])
    //     // }
    //     // else{
    //     //     return;
    //     // }
        
    // }
    convertIntoMeter2(parentOfareaList.childNodes)
    
   
}

// convert into meter squaure
function convertIntoMeter2(parent){
    for(const child of parent){
        console.log(child.childNodes);
        if(child.childNodes.length != 0){
            child.childNodes[9].addEventListener('click',function(event){
                console.log('i am clicked');
                console.log(event.target.parentNode.childNodes[5])
                const areaInCm = event.target.parentNode.childNodes[5].innerText;
                console.log(areaInCm);
                const areaInM = parseFloat(areaInCm) * 0.0001;
                event.target.parentNode.childNodes[5].innerText = areaInM.toExponential(2);
                const textCm = event.target.parentNode.childNodes[7];
                console.log(textCm)
                textCm.innerHTML = `m<sup>2<sup>`;
                event.target.innerHTML = `<button class="bg-emerald-400 px-2 py-1 rounded hover:bg-emerald-300">convert to cm<sup>2</sup></button>`;
            })
        }  
    }
}