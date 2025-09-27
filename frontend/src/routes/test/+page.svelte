<script>
  import { DateTime as dt } from "luxon";

  let selectedDateTime = dt.now();
  let currentMonth = dt.now().startOf("month");

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 24 }, (_, i) => i); // 0..23

  function getDays(month) {
    const startWeekday = month.weekday % 7;
    const daysInMonth = month.daysInMonth;  
    const days = [];
    for (let i = 0; i < startWeekday; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }

  function prevMonth() {
    currentMonth = currentMonth.minus({ months: 1 });
  }

  function nextMonth() {
    currentMonth = currentMonth.plus({ months: 1 });
  }

  function selectDate(day) {
    selectedDateTime = selectedDateTime.set({
      year: currentMonth.year,
      month: currentMonth.month,
      day
    });
  }

  function selectHour(event) {
    selectedDateTime = selectedDateTime.set({ hour: Number(event.target.value), minute: 0 });
  }
</script>

<div class="border rounded p-2 w-128 mb-4 bg-[#7d1b1f]">
  <div class="flex justify-between items-center mb-2 text-white">
    <button on:click={prevMonth} class="hover:bg-green-400">&lt;</button>
    <div class="font-bold">{currentMonth.toFormat("MMMM yyyy")}</div>
    <button on:click={nextMonth} class="hover:bg-green-400">&gt;</button>
  </div>

  <div class="grid grid-cols-7 text-center font-semibold text-white gap-8">
    {#each weekdays as day}
      <div>{day}</div>
    {/each}
  </div>

  <div class="grid grid-cols-7 text-center text-white gap-8">
    {#each getDays(currentMonth) as day}
      {#if day === null}
        <div></div>
      {:else}
      <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) --> 
        <div
          class="cursor-pointer rounded p-1 hover:bg-green-400
            {selectedDateTime.hasSame(currentMonth.set({ day }), 'day') ? 'bg-green-400 text-white' : ''}
            {dt.now().hasSame(currentMonth.set({ day }), 'day') ? 'border border-blue-500' : ''}"
          on:click={() => selectDate(day)}
        >
          {day}
        </div>
      {/if}
    {/each}
  </div>
</div>

<div class="flex flex-col gap-2 w-64">
  <label for="hour">Select Hour:</label>
  <select id="hour" on:change={selectHour} bind:value={selectedDateTime.hour}>
    {#each hours as h}
      <option value={h}>{h % 12 === 0 ? 12 : h % 12} {h < 12 ? "AM" : "PM"}</option>
    {/each}
  </select>
</div>

<p class="mt-2">
  Selected: {selectedDateTime.toLocaleString(dt.DATETIME_FULL)}
</p>
