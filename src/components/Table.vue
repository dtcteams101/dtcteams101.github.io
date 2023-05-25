<script setup>
import TableHeader from '../components/TableHeader.vue'
import TableRow from '../components/TableRow.vue'
</script>

<template>
  <div class="table">
    <TableHeader />
    <TableRow name="Alarmy (Premium)" details="Audio reminders, tactile feedback, snoozable, paid ($x)" link="Link" rating="Rating" />
    <TableRow name="Coalarm" details="Audio reminders, free" link="Link" rating="Rating" />
    <TableRow name="Cozi Family Organizer" details="Includes calendar, syncs with group, free" link="Link" rating="Rating" />
    <TableRow name="Google Calendar" details="Tactile feedback, includes calendar, syncs with group, free" link="Link" rating="Rating" />
    <TableRow name="Talk to me Alarm Clock" details="Audio reminders, tactile feedback, free" link="Link" rating="Rating" />
    <TableRow name="Reminder" details="Audio reminders, tactile feedback, picture reminders, includes calendar, paid ($x)" link="Link" rating="Rating" />
  </div>
</template>

<style scoped>
.table {
  margin-top: 30px;
  overflow-x: auto;
  overflow-y: auto;
}
</style>
