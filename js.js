var select = document.getElementById('option');
// var p = document.getElementById('paragraph')

select.addEventListener('change', () => {
  let check = select.options[select.selectedIndex].value;
  console.log(check)
  if(check == 'custom')
  {
    if(document.getElementById("getOff") != null)
    {
      let get = document.getElementById("getOff")
      get.setAttribute('id','get')
    }
    if(document.getElementById("imageBox") != null)
    {
      let on = document.getElementById("imageBox");
      on.removeChild(on.children[0])
      on.setAttribute('id','imageBoxOff')
    }

    let oneChar = document.getElementById("oneCharOff")
    // oneChar.removeAttribute("id");
    oneChar.setAttribute("id","oneChar")
    let button = document.getElementById("extract")
    button.removeAttribute("onclick");
    button.setAttribute("onclick","OneCharRun()")
  }
  else if(check == 'textToNum'){
    if(document.getElementById("getOff") != null)
    {
      let get = document.getElementById("getOff")
      get.setAttribute('id','get')
    }
    if(document.getElementById("imageBox") != null)
    {
      let on = document.getElementById("imageBox");
      on.removeChild(on.children[0])
      on.setAttribute('id','imageBoxOff')
    }
    if(document.getElementById("oneChar") != null)
    {
      let oneChar = document.getElementById("oneChar")
      // oneChar.removeAttribute("id");
      oneChar.setAttribute("id","oneCharOff")
    }
    
    let button = document.getElementById("extract")
    button.removeAttribute("onclick");
    button.setAttribute("onclick","textToNum()")
  }
  else{
    if(document.getElementById("get") != null)
    {
      let get = document.getElementById("get")
      get.setAttribute('id','getOff')
    }
    let on = document.getElementById("imageBoxOff");
    on.setAttribute('id','imageBox')
    on.innerHTML = `
    <input type="file" name="Img" id="Img">`;


    let oneChar = document.getElementById("oneChar")
    // oneChar.removeAttribute("id");
    oneChar.setAttribute("id","oneCharOff")
    let button = document.getElementById("extract")
    button.removeAttribute("onclick");
    button.setAttribute("onclick","ImgTotext()")
  }
})

function OneCharRun(){
    let get = document.getElementById("get").value;
    let oneChar = document.getElementById("oneChar").value;
    let arr = get.split('\n')
    let one = '';
    let two = '';
    for(let i=0;i<arr.length;i++)
    {
        let ch = arr[i].split(oneChar);
        one += ch[0] + '\n';
        two += ch[1] + '\n';
    }
    // console.log(one)
    // console.log(two)
    let put = document.getElementById("put");
    put.value = `_____First Name_____ \n
    ${one}
    _____Second Name_____ \n
    ${two}`
}

function textToNum(){
    // const string = 'test1 +91 9443134651 test2 +1 671-765-0091 +33442207724';
    let put = document.getElementById('put');
    put.value = "";
    const string = document.getElementById("get").value;
    let phone_numbers = [];
    const regexp = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+","g");
    phone_numbers = [...string.matchAll(regexp)];
    for (const match of phone_numbers) {
        put.value += match[0] + '\n';
    }
console.log(phone_numbers);
// expected output: Array ["+1 671-765-0091", "-0091"]
}

function ImgTotext(){
    
}
