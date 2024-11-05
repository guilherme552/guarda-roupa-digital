// Variáveis para armazenar temporariamente o email e a senha do usuário cadastrado
let registeredEmail = "guilher.mariano@gmail.com";
let registeredPassword = "123456";

function showCadastro() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("cadastroScreen").classList.remove("hidden");
}

function login() {
  // Obter os valores de email e senha dos inputs de login
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verificar se o email e a senha correspondem aos registrados
  if (email === registeredEmail && password === registeredPassword) {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
}

function register() {
  // Obter os valores de email e senha dos inputs de cadastro
  const emailCadastro = document.getElementById("emailCadastro").value;
  const passwordCadastro = document.getElementById("passwordCadastro").value;

  // Armazenar os dados do usuário nas variáveis
  registeredEmail = emailCadastro;
  registeredPassword = passwordCadastro;

  alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
  
  // Redirecionar para a tela de login
  document.getElementById("cadastroScreen").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");
}

function upload() {
  alert("Função de Upload em desenvolvimento");
}

function filter() {
  alert("Função de Filtro em desenvolvimento");
}

function savedModels() {
  alert("Função de Modelos Salvos em desenvolvimento");
}