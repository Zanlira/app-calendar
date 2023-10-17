<template>
    <!-- design 3 -->
    <div class="calendario">
        <div class="month-controls">
            <v-btn icon @click="prevMonth">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <h2>{{ monthYear }}</h2>
            <v-btn icon @click="nextMonth">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
        <v-table>
            <thead>
                <tr>
                    <th v-for="(day, index) in daysOfWeek" :key="index">{{ day }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="week in calendarData" :key="week[0].day">
                    <td v-for="day in week" :key="day.day">
                        {{ day.day }}
                        <ul>
                            <v-card v-for="task in day.tasks" :key="task.nombre">
                                <div class="text-center">
                                    <v-btn color="primary" @click="showTaskDialog(task)">
                                        {{ task.nombre }} <v-icon end icon="mdi mdi-dots-horizontal"></v-icon>
                                        <v-dialog v-model="task.dialog" width="auto">
                                            <v-card>
                                                <v-card-text>
                                                    {{ task.descripcion }}
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-btn color="primary" block
                                                        @click="closeTaskDialog(task)">Cerrar</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-btn>
                                </div>
                            </v-card>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            calendarData: [],
            daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            currentDate: new Date(),
        };
    },
    computed: {
        monthYear() {
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth() + 1;
            return `${this.getMonthName(month)} ${year}`;
        },
    },
    created() {
        this.generateCalendarData();
    },
    methods: {
        getMonthName(month) {
            const monthNames = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];
            return monthNames[month - 1];
        },
        generateCalendarData() {
            this.calendarData = [];
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth() + 1;

            const firstDayOfMonth = new Date(year, month - 1, 1);
            const lastDayOfMonth = new Date(year, month, 0);
            const numDaysInMonth = lastDayOfMonth.getDate();

            let currentWeek = [];
            let currentDayOfWeek = firstDayOfMonth.getDay();

            for (let day = 1; day <= numDaysInMonth; day++) {
                const tasks = this.getTasksForDay(year, month, day);
                currentWeek.push({ day, tasks });

                if (currentDayOfWeek === 6 || day === numDaysInMonth) {
                    this.calendarData.push([...currentWeek]);
                    currentWeek = [];
                    currentDayOfWeek = 0;
                } else {
                    currentDayOfWeek++;
                }
            }
        },
        getTasksForDay(year, month, day) {
            const tareas = [
                { nombre: 'Tarea 1', fecha: new Date(2023, 9, 15), descripcion: 'muestra1' },
                { nombre: 'Tarea 2', fecha: new Date(2023, 9, 17), descripcion: 'muestra2' },
                { nombre: 'Tarea 3', fecha: new Date(2023, 9, 17), descripcion: 'muestra3' },
                { nombre: 'Tarea 4', fecha: new Date(2023, 9, 20), descripcion: 'muestra4' },
                // Agrega más tareas aquí
            ];

            // Filtrar las tareas para el día específico
            const tareasDelDia = tareas.filter((tarea) => {
                const tareaFecha = tarea.fecha;
                return (
                    tareaFecha.getFullYear() === year &&
                    tareaFecha.getMonth() + 1 === month &&
                    tareaFecha.getDate() === day
                );
            });

            // Agregar la propiedad "dialog" a cada tarea para controlar el diálogo
            const tareasConDialog = tareasDelDia.map((tarea) => ({ ...tarea, dialog: false }));

            return tareasConDialog;
        },
        showTaskDialog(task) {
            task.dialog = true;
        },
        closeTaskDialog(task) {
            task.dialog = false;
        },
        prevMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.generateCalendarData();
            this.$nextTick(() => {
                // Actualiza la vista después de cambiar la fecha
                this.$forceUpdate();
            });
        },
        nextMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.generateCalendarData();
            this.$nextTick(() => {
                // Actualiza la vista después de cambiar la fecha
                this.$forceUpdate();
            });
        },
    },
};
</script>

<style scoped>
.calendario {
    width: 100%;
    text-align: center;
}

.month-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

th {
    background-color: #f2f2f2;
}

.task-label {
    font-weight: bold;
}
</style>