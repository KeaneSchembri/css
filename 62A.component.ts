import { Component } from '@angular/core';
import { students } from './students';

@Component({
    selector: 'app-62A',
    templateUrl: './62A.component.html',
    styleUrls: ['./62A.component.css']
})
export class ClassComponent {
    title = 'Welcome to Class 6.2A';
    studentsData: students[] = [];

    filteredStudentsData: students[] = [];

    _filteredStudentSearch: string;
    _filteredStudentSearchID: number;
    _filterSurname: string;

    constructor() {
        let stud = new students(1, "Zvetlana", "Bajada");
        this.studentsData.push(stud);
        stud = new students(2, "Keane", "Mizzi");
        this.studentsData.push(stud);
        stud = new students(3, "Isaac", "Tanti");
        this.studentsData.push(stud);

        this.filteredStudentsData = this.studentsData;
    }

    get FilterClassMates(): string {
        return this._filteredStudentSearch;
    }

    set FilterClassMates(userSearch: string) {
        this._filteredStudentSearch = userSearch;
        this.filteredStudentsData = this.FilterMethod(this._filteredStudentSearch, this._filterSurname);
    }

    get FilterClassMatesID() {
        return this._filteredStudentSearchID;
    }

    set FilterClassMatesID(idSearch) {
        this._filteredStudentSearchID = idSearch;
        this.filteredStudentsData = this.FilterMethod(this._filteredStudentSearch, this._filterSurname);
    }

    get FilterSurname() {
        return this._filterSurname;
    }

    set FilterSurname(surname: string) {
        this._filterSurname = surname;
        this.filteredStudentsData = this.FilterMethod(this._filteredStudentSearch, this._filterSurname)
    }

    FilterMethod(value: string, surname: string): students[] {
        /*if ((value == null || value.length == 0) && (this.FilterClassMatesID == null))
            return this.studentsData;*/

        return this.studentsData.filter((s: students) => {
            let add: boolean = true;
            if (value != null && value.length > 0 && s.name.toLowerCase().indexOf(value.toLowerCase()) < 0)
                add = false;

            if(surname != null && surname.length > 0 && s.surname.toLowerCase().indexOf(surname.toLowerCase()) < 0)
                add = false;
            if (this.FilterClassMatesID != null && s.id > this.FilterClassMatesID)
                add = false;

            return add;
        });
    }
}