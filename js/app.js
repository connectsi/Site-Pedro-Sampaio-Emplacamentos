function atualizarAnoFooter() {
  const elementoAno = document.getElementById("anoAtual");
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
}

//FOOTER
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.footer').innerHTML = `
    <footer class="bg-footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-3 col-sm-6">
                            <div class="text-center">
                                <a href="quem_somos.html"><img src="assets/img/logo_pse_footer.png" alt=""></a>
                            </div>
                            <div class="line"></div>
                            <p>PSE - Pedro Sampaio Emplacamentos</p>
                            <div class="sociais-icons">
                                <a href="https://wa.me/5588999090835?text=" target="_blank"><i class="ri-whatsapp-fill"></i></a>
                                <a href="mailto:despachantepedro90@gmail.com" target="_blank"><i class="ri-mail-fill"></i></a>
                                <a href="https://www.instagram.com/pedrosampaio_45/" target="_blank"><i class="ri-instagram-fill"></i></a>
                                <a href="https://www.facebook.com/pedrosampaio.sampaio.3?locale=pt_BR" target="_blank"><i class="ri-facebook-circle-fill"></i></a>
                            </div>
                            <p class="mt-4">Imagens apenas ilustrativas</p>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <h5 class="mb-0">SERVIÇOS</h5>
                            <div class="line"></div>
                            <ul>
                                <li>Transferência de veículo</li>
                                <li>Segunda via de transferências</li>
                                <li>Primeiro emplacamento de veículo </li>
                                <li>solicitação de placa do Mercosul</li>
                                <li>Impressão de boleto de IPVA</li>
                                <li>Impressão da ATPV</li>
                                <li>Impressão do CRLV só com a placa</li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <h5 class="mb-0">CONTATO PSE</h5>
                            <div class="line"></div>
                            <ul>
                                <li>WhatsApp: (88)9 9909-0835</li>
                                <li>Instagram: @pedrosampaio_45</li>
                                <li>E-mail: despachantepedro90@gmail.com</li>
                                <li>CNPJ: 42.939.598/0001-29</li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <h5 class="mb-0">ENDEREÇO</h5>
                            <div class="line"></div>
                            <ul>
                                <li>Senador Sá - CE</li>
                                <li>R PADRE DELMONTE</li>
                                <li>CENTRO</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="row g-4 justify-content-between">
                        <div class="col-auto">
                            <p class="mb-0">© <span id="anoAtual"></span> Todos os direitos reservados a PSE - Pedro Sampaio Emplacamentos</p>
                        </div>
                        <div class="col-auto">
                            <p class="mb-0">Criado por:<a href="https://www.instagram.com/connect_si_15/" target="_blank"> Connect -
                                    Soluções Inovadoras</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    atualizarAnoFooter();
});