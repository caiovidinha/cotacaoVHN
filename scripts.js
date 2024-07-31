document.addEventListener('DOMContentLoaded', function () {
    const tipoVoo = document.getElementById('tipoVoo');
    const datasHorariosVoo = document.getElementById('datasHorariosVoo');
    const dataIda = document.getElementById('dataIda');
    const horarioIda = document.getElementById('horarioIda');
    const dataHorarioVoltaContainer = document.getElementById('dataHorarioVoltaContainer');
    const dataVolta = document.getElementById('dataVolta');
    const horarioVolta = document.getElementById('horarioVolta');

    tipoVoo.addEventListener('change', function () {
        if (tipoVoo.value === 'ida') {
            datasHorariosVoo.classList.remove('hidden');
            dataHorarioVoltaContainer.classList.add('hidden');
        } else if (tipoVoo.value === 'idaVolta') {
            datasHorariosVoo.classList.remove('hidden');
            dataHorarioVoltaContainer.classList.remove('hidden');
        } else {
            datasHorariosVoo.classList.add('hidden');
        }
    });

    const form = document.getElementById('cotacaoForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        const data = {
            tipoVoo: formData.get('tipoVoo'),
            dataIda: formData.get('dataIda'),
            horarioIda: formData.get('horarioIda'),
            dataVolta: formData.get('dataVolta'),
            horarioVolta: formData.get('horarioVolta'),
            origem: formData.get('origem'),
            destino: formData.get('destino'),
            bagagem: formData.get('bagagem'),
            codigoHospedagem: formData.get('codigoHospedagem'),
        };

        console.log(data);
        alert('Formulário enviado com sucesso!');
    });
});
