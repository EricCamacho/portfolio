document.getElementById('gerarPDF').addEventListener('click', function() {
    // Criar um novo objeto jsPDF
    var doc = new jsPDF();
  
    // Capturar o HTML da página atual
    var paginaHTML = document.body.innerHTML;
  
    // Adicionar o conteúdo HTML ao PDF
    doc.html(paginaHTML, {
      callback: function(doc) {
        // Salvar o PDF
        doc.save('Portfolio_EricCamacho.pdf');
      }
    });
  });