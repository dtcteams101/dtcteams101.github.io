<script setup>
import TableHeader from '../components/TableHeader.vue'
import TableRow from '../components/TableRow.vue'
</script>

<template>
  <div class="table">
    <TableHeader />
    <TableRow name="Alarmy (Premium)" details="Audio reminders, tactile feedback, snoozable, paid ($4.99/month)" link="https://apps.apple.com/us/app/alarmy-alarm-clock-sleepsound/id1163786766" rating="4.8/5 ⭐" />
    <TableRow name="Coalarm" details="Audio reminders, free" link="https://apps.apple.com/no/app/voice-alarm-clock-coalarm/id1586940322" rating="Not rated" />
    <TableRow name="Cozi Family Organizer" details="Includes calendar, syncs with group, free" link="https://apps.apple.com/us/app/cozi-family-organizer/id407108860" rating="4.8/5 ⭐" />
    <TableRow name="Google Calendar" details="Tactile feedback, includes calendar, syncs with group, free" link="https://apps.apple.com/us/app/google-calendar-get-organized/id909319292" rating="4.6/5 ⭐" />
    <TableRow name="Talk to me Alarm Clock" details="Audio reminders, tactile feedback, free" link="https://apps.apple.com/us/app/talk-to-me-alarm-clock/id1535616112" rating="3.5/5 ⭐" />
    <TableRow name="Reminder (with voice)" details="Audio reminders, tactile feedback, picture reminders, includes calendar, paid ($1.99)" link="https://apps.apple.com/us/app/reminder-reminders-with-voice/id1071899483" rating="4.7/5 ⭐" />
  </div>
</template>

<style scoped>
.table {
  margin-top: 30px;
  overflow-x: auto;
  overflow-y: auto;
}
</style>
