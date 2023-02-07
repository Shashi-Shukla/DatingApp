import { AccountService } from 'src/app/_services/account.service';
import { User } from 'src/app/_models/user';
import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Directive({
  selector: '[appHasRole]' //*appHasRole=
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[] = [];
  user: User = {} as User;

  constructor ( private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>,
    private accountService: AccountService )
  {
    this.accountService.currentUser$.pipe( take( 1 ) ).subscribe( {
      next: user =>
      {
        if(user) this.user = user
      }
    })
  }
  ngOnInit(): void
  {
    if ( this.user.roles.some( r => this.appHasRole.includes( r ) ) ) {
      this.viewContainerRef.createEmbeddedView( this.templateRef );
    } else {
      this.viewContainerRef.clear()
    }
  }

}
