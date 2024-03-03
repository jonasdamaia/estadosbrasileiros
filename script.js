function buscarBandeira(){
    var nomeDoEstado = document.querySelector('input#inputNome')
    var res = document.querySelector('div#res')
    var texto = document.querySelector('div#texto')

    if(nomeDoEstado.value.length !== 2){
        alert('ERRO! Você deve informar a sigla do estao com 2 caracteres!')
    }else{
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(nomeDoEstado.value.toUpperCase() == 'AC'){
            texto = "ACRE"
            img.setAttribute('src', 'ac.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'AL'){
            texto = "ALAGOAS"
            img.setAttribute('src', 'al.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'AM'){
            texto = "AMAZONAS"
            img.setAttribute('src', 'am.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'AP'){
            texto = "AMAPÁ"
            img.setAttribute('src', 'ap.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'BA'){
            texto = "BAHIA"
            img.setAttribute('src', 'ba.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'CE'){
            texto = "CEARÁ"
            img.setAttribute('src', 'ce.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'DF'){
            texto = "DISTRITO FEDERAL"
            img.setAttribute('src', 'df.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'ES'){
            texto = "ESPÍRITO SANTO"
            img.setAttribute('src', 'es.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'GO'){
            texto = "GOIAS"
            img.setAttribute('src', 'go.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'MA'){
            texto = "MARANHÃO"
            img.setAttribute('src', 'ma.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'MG'){
            texto = "MINAS GERAIS"
            img.setAttribute('src', 'mg.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'MS'){
            texto = "MATO GROSSO DO SUL"
            img.setAttribute('src', 'ms.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'MT'){
            texto = "MATO GROSSO"
            img.setAttribute('src', 'mt.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'PA'){
            texto = "PARÁ"
            img.setAttribute('src', 'pa.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'PB'){
            texto = "PARAÍBA"
            img.setAttribute('src', 'pb.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'PE'){
            texto = "PERNAMBUCO"
            img.setAttribute('src', 'pe.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'PI'){
            texto = "PIAUÍ"
            img.setAttribute('src', 'pi.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'PR'){
            texto = "PARANÁ"
            img.setAttribute('src', 'pr.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'RJ'){
            texto = "RIO DE JANEIRO"
            img.setAttribute('src', 'rj.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'RN'){
            texto = "RIO GRANDE DO NORTE"
            img.setAttribute('src', 'rn.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'RO'){
            texto = "RONDÔNIA"
            img.setAttribute('src', 'ro.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'RR'){
            texto = "RORAIMA"
            img.setAttribute('src', 'rr.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'RS'){
            texto = "RIO GRANDE DO SUL"
            img.setAttribute('src', 'rs.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'SC'){
            texto = "SANTA CATARINA"
            img.setAttribute('src', 'sc.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'SE'){
            texto = "SERGIPE"
            img.setAttribute('src', 'se.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'SP'){
            texto = "SÃO PAULO"
            img.setAttribute('src', 'sp.png')
        }else if(nomeDoEstado.value.toUpperCase() == 'TO'){
            texto = "TOCANTINS"
            img.setAttribute('src', 'to.png')
        }else{
            alert('NÂO IDENTIFICADO!')
            return
        }
        res.innerHTML = ''
        res.innerHTML = texto
        res.appendChild(img)
    }
    nomeDoEstado.value = ''
}