import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription, Observable } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: [ './shopping-list.component.css' ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Observable<{ ingredients: Ingredient[] }>;
	private igChanegSub: Subscription;

	constructor(private loggingService: LoggingService, private store: Store<fromShoppingList.AppState>) {}

	ngOnInit() {
		this.ingredients = this.store.select('shoppingList');
		// this.ingredients = this.slService.getIngredients();
		// this.igChanegSub = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
		// 	this.ingredients = ingredients;
		// });

		this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit');
	}

	onEditItem(index: number) {
		// this.slService.startedEditing.next(index);
		this.store.dispatch(new ShoppingListActions.StartEdit(index));
	}

	ngOnDestroy(): void {
		// this.igChanegSub.unsubscribe();
	}
}
