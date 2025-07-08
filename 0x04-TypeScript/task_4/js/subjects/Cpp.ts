namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC <= 0 || this.teacher.experienceTeachingC === undefined) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}