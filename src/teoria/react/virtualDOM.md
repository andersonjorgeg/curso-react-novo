# O que é a `Virtual DOM` e como ela funciona no React

A `Virtual DOM (DOM virtual, em português)` é um conceito utilizado pelo framework React para gerenciar e atualizar eficientemente a interface do usuário em uma aplicação web.

Quando o estado de uma aplicação React muda, o framework cria uma representação em memória de como o DOM deve ser atualizado para refletir essa mudança de estado. Em seguida, o React comparará essa representação com a última que foi renderizada na tela, determinando quais elementos precisam ser adicionados, removidos ou atualizados. Isso é conhecido como "reconciliação".

Ao invés de atualizar diretamente o DOM, o React atualiza a Virtual DOM e, em seguida, compara a Virtual DOM atual com a anterior para determinar quais alterações devem ser aplicadas no DOM real. Isso é mais eficiente do que atualizar o DOM diretamente a cada vez que ocorre uma mudança de estado, pois evita o chamado "custo de refatoração" (rebuilding cost) do DOM, que pode ser um processo custoso em termos de performance.

Em resumo, a Virtual DOM é uma forma utilizada pelo React para gerenciar e atualizar eficientemente a interface do usuário em uma aplicação web, comparando a representação atual da interface com a anterior para determinar quais alterações precisam ser feitas no DOM real.
