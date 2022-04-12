import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-more-info-task',
  templateUrl: './more-info-task.component.html',
  styleUrls: ['./more-info-task.component.css']
})
export class MoreInfoTaskComponent implements OnInit {

  taskForm !: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public editData: any,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    if (this.editData) {
      this.taskForm = this.formBuilder.group({
        name: [this.editData.name],
        description: [this.editData.description],
        createTime: [this.editData.createTime],
        dueTime: [this.editData.dueTime],
        lastEditTime: [this.editData.lastEditTime],
        startTime: [this.editData.startTime],
        endTime: [this.editData.endTime],
        assignee: [this.editData.assignee.name + ' ' + this.editData.assignee.surname],
        creator: [this.editData.creator.name + ' ' + this.editData.creator.surname],
        project: [this.editData.project.name],
        priority: [this.editData.priority],
        stage: [this.editData.stage],
        type: [this.editData.type]
      });
    }
  }
}
