const modalities = {
    "Integrative":"Integrative counselling looks at the whole person, taking into account your mental, physical and emotional needs. Your therapist will use techniques and tools from different modalities to tailor an individual approach for you.",
    "Person Centered":"Person or client-centred therapy is based on the view that everyone has the capacity and desire for personal growth and change, given the right conditions. Rather than being seen as the expert and directing the therapy, the counsellor offers unconditional positive regard, empathy and congruence to help you come to terms with any negative feelings and to change and develop in your own way.",
    "Cognitive Behavioural Therapy(CBT)":"CBT aims to help you change the way you think (cognitive) and what you do (behaviour). Rather than looking at past causes, it focuses on current problems and practical solutions to help you feel better now.<br><br> The way we think about situations affects the way we feel and behave. If we view a situation negatively, we may experience negative emotions and feelings which lead us to behave in an unhelpful way. Your therapist will help you identify and challenge any negative thinking so you can deal with situations better and behave in a more positive way",
    "Gestalt Therapy":"The name Gestalt is derived from the German for ‘whole’ or ‘pattern’. It looks at the individual as a whole, and within their surroundings, rather than breaking things into parts. Practitioners help you to focus on the here and now and your immediate thoughts, feelings and behaviour to better understand how you relate to others and to situations. This can help you find a new, positive perspective on problems and bring about changes in your life.",
    "Solution Focused Brief Therapy":"This therapy promotes positive change rather than dwelling on past problems. Practitioners will encourage you to focus positively on what you do well, set goals and work out how to achieve them. Just three or four sessions may be beneficial.",
    "Transactional analysis":"Transactional analysis is a comprehensive approach which incorporates aspects of humanistic, cognitive-behavioural and psychodynamic therapy. It categorises the human personality into three states – Parent, Adult and Child – which can help you understand how you interact with others.<br><br>Therapists also look at how your beliefs and the way you interpret the world around you can create recurrent and problematic patterns of behaviour, and will work with you to help you to change.",
}





function CloseModal(){
    modal = document.querySelector('.modal');
    document.getElementById('modal-title').innerHTML = '';
    document.getElementById('modal-content').innerHTML = '';
    modal.style.opacity = 0;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function OpenModal(elem){
    console.log(modalities[elem])
    document.getElementById('modal-title').innerHTML = elem;
    document.getElementById('modal-content').innerHTML = modalities[elem];
    modal = document.querySelector('.modal');
    modal.style.opacity = 1;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}


const modal_box = document.querySelector('.modal');

modal_box.addEventListener('click',function(){
    CloseModal();
});


function OpenMenu(){
    hburger = document.querySelector('.hamburger');
    s = hburger.getAttribute('status');
    menu = document.querySelector('.menu')
    if (s == 'closed'){
        console.log('menu is closed');
        hburger.setAttribute('status','open')
        menu.style.display = 'block';
        
        
    } else {
        console.log('menu is open');
        hburger.setAttribute('status','closed')
        menu.style.display = 'none';

    }
}

function CloseMenu(){
    hburger = document.querySelector('.hamburger');
    hburger.setAttribute('status','closed')
    menu.style.display = 'none';

}
