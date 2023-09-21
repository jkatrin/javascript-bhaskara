function calcular() {
    var a = window.prompt('Digite o valor de "a"')
    var b = window.prompt('Digite o valor de "b"')
    var c = window.prompt('Digite o valor de "c"')
    var resd = (b * b) - 4 * a * c
    res.innerHTML = `<p><strong>Resolução</strong></p>`
    res.innerHTML += `<p>A equação é <strong>${a}x² + ${b}x + ${c} = 0</strong>.</p>`
    res.innerHTML += `<p>O cálculo realizado será: Δ = ${b}²-4.${a}.${c}.</p>`
    res.innerHTML += `<p>A resposta é de Δ é ${resd}.</p>`
}