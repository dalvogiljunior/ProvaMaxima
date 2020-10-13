import {Component} from "@angular/core"

@Component({
  selector: "produto",
  template: "<html><body>{{ obtenhaNome() }}</body></html>"
})

export class ProdutoComponent {

  public nome: string;

  public obtenhaNome(): string {
    return "Samsung";
  }

}
