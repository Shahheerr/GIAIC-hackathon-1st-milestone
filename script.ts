document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsList = document.getElementById('skillsList') as HTMLUListElement;

    toggleButton.addEventListener('click', () => {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'flex';
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsList.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
});