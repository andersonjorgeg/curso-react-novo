# Como usar a propriedade `grid-template-columns` no CSS para definir o tamanho e o comportamento das colunas de um grid

A propriedade `grid-template-columns` é usada para definir o tamanho e o comportamento das colunas em um grid CSS. Ela aceita vários valores, incluindo:

* `<tamanho>`: um valor numérico em qualquer unidade de medida válida, como pixels ou porcentagem, que define o tamanho da coluna em questão. Por exemplo, grid-template-columns: 50px 100px criaria duas colunas de 50 pixels e 100 pixels, respectivamente.
* `<repetição>`: uma repetição de um ou mais valores separados por espaços, precedidos pelo símbolo repeat. Isso cria uma série de colunas com o mesmo tamanho. Por exemplo, grid-template-columns: repeat(3, 1fr) criaria três colunas de tamanho igual, cada uma ocupando um quarto da largura total do grid.
* `<fr>`: um valor de unidade de medida em fracções, que define o tamanho da coluna em relação às outras colunas e ao espaço restante no grid. Por exemplo, grid-template-columns: 1fr 2fr criaria duas colunas, com a primeira ocupando um terço da largura total do grid e a segunda ocupando dois terços.
* `<auto-fill>`: um valor especial que faz com que o grid se ajuste automaticamente para preencher o espaço disponível, criando colunas do tamanho especificado até que não haja mais espaço disponível. Por exemplo, grid-template-columns: repeat(auto-fill, 50px) criaria colunas de 50 pixels até que todo o espaço disponível no grid seja preenchido.
* `<auto-fit>`: um valor especial semelhante a auto-fill, mas que cria colunas do tamanho especificado apenas se houver espaço suficiente disponível no grid. Se não houver espaço suficiente, as colunas serão ajustadas automaticamente para preencher o espaço disponível. Por exemplo, grid-template-columns: repeat(auto-fit, 50px) criaria colunas de 50 pixels apenas se houver espaço suficiente no grid para elas, caso contrário, elas serão ajustadas automaticamente para preencher o espaço disponível.

