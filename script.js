 document.addEventListener('DOMContentLoaded', function () {
        const input = document.querySelector('input');
        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const buttonText = button.textContent;

                if (buttonText === 'AC') {
                    input.value = '';
                } else if (buttonText === 'DEL') {
                    input.value = input.value.slice(0, -1);
                } else if (buttonText === '=') {
                    try {
                        input.value = eval(input.value);
                    } catch (error) {
                        input.value = 'Error';
                    }
                } else {
                    input.value += buttonText;
                }
            });
        });
    });