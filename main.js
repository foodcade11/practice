let input=document.querySelector('#prog-list')
input.addEventListener('keyup',function(e){
    let text=input.ariaValueMax.toLowerCase();
     
    let li_list=document.getElementsByTagName('li')

    Array.from(li_list).forEach(function(item)
    {
        let itemname=item.firstChild.textContent.toLowerCase()
        if(itemname.indexOf(text)!=-1)
        {
            item.style.display='block'

        }else{
            item.style.display='none'
        }
    })
})