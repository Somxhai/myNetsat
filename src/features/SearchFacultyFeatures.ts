

function blurScreen() {
    let facultySearch:HTMLElement | null = document.getElementById('FacultySearch');
    let box:HTMLElement | null = document.getElementById('calculator');
    if (facultySearch != null && box != null) {
        if(box.classList.contains('blur-sm')) {
            box.classList.remove('blur-sm', 'pointer-events-none', 'opacity-75' , 'overflow-hidden')
            facultySearch.classList.add('hidden')
        } else {
            box.classList.add('blur-sm', 'pointer-events-none', 'opacity-75', 'overflow-hidden')
            facultySearch.classList.remove('hidden')
        }
    }
}

export {blurScreen}