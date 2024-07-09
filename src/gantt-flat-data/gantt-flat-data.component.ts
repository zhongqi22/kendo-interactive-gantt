import { Component, ViewChild } from '@angular/core';
import { GanttDependency, GanttComponent, CellClickEvent, TaskClickEvent, GanttModule, TimelineViewType } from '@progress/kendo-angular-gantt';
import { dependencies, Task, data } from './flat-data';
import { CommonModule, JsonPipe } from '@angular/common';
import { GridLayoutModule } from '@progress/kendo-angular-layout';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';

@Component({
  selector: 'app-gantt-flat-data',
  standalone: true,
  imports: [GanttModule, JsonPipe, GridLayoutModule, CommonModule, ToolBarModule],
  templateUrl: './gantt-flat-data.component.html',
  styleUrl: './gantt-flat-data.component.css'
})
export class GanttFlatDataComponent {
  public dependencies: GanttDependency[] = dependencies;
  public data: Task[] = data;
  public activeView: TimelineViewType = "week";
  public views: TimelineViewType[] = ["day", "week", "month"];
  
  @ViewChild('myGantt') myGantt?: GanttComponent;

  public selectionState: Set<number> = new Set();

  public get selectedKeys(): number[] {
    //only display SKU Tasks ID
    return this.data.filter(t => t.parentTaskId && this.selectionState.has(t.id)).map(e => e.id);
  } 

  public clearSelection(){
    this.selectionState.clear();

    if(this.myGantt)
      this.myGantt.updateView();
  }

  public isSelected = (dataItem: Task | any): boolean => {
    return this.selectionState.has(dataItem.id);
  };

  public hasSubTask = (dataItem: Task): boolean => {
    return this.data.some(task => task.parentTaskId === dataItem.id);
  }

  public parentTaskIsInSelection = (dataItem: Task): boolean => {
    if(dataItem.parentTaskId)
      return this.selectionState.has(dataItem.parentTaskId);
    else
      return false;
  }

  public toggleSelection({
    dataItem, sender, originalEvent
  }: CellClickEvent | TaskClickEvent): void {

    originalEvent.preventDefault();
    
    let isSelected = this.isSelected(dataItem);
    
    if(isSelected){
      this.selectionState.delete(dataItem.id);
      
      //parent task is selected, auto select all the child task
      if(this.hasSubTask(dataItem)){
        this.data.filter(d => d.parentTaskId === dataItem.id)
          .forEach(subtask => {
            this.selectionState.delete(subtask.id);
          })
      }

      //if one of the child is deselected, remove parent from selection indicator from parent
      if(this.parentTaskIsInSelection(dataItem)){
          this.selectionState.delete(dataItem.parentTaskId)
      }
      
    } else {
      this.selectionState.add(dataItem.id);
      
      //parent task is deselected, auto deselect all the child task
      if(this.hasSubTask(dataItem)){
        this.data.filter(d => d.parentTaskId === dataItem.id)
          .forEach(subtask => {
            this.selectionState.add(subtask.id);
          })
      }
    }

    sender.updateView();
  }
}
