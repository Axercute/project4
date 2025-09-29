<script>
  import { DateTime as dt } from "luxon";

  let today = dt.now();
  let selectedDate = $state(today)
  let firstDayOfThisMonth = $state(dt.now().set({ day: 1 }))

  let open = $state(false)
  let container;
  let {value=$bindable()}=$props()

  const getDays = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const startWeekday = firstDayOfThisMonth.weekday % 7;
    const daysInMonth = firstDayOfThisMonth.daysInMonth;
    const days = [];
    for (let i = 0; i < startWeekday; i++) days.push("");
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return { days, weekdays };
  };

  let { days, weekdays } = $state(getDays())

  const prevMonth = () => {
    firstDayOfThisMonth = firstDayOfThisMonth.minus({ months: 1 });
    ({ days, weekdays } = getDays());
  };

  const nextMonth = () => {
    firstDayOfThisMonth = firstDayOfThisMonth.plus({ months: 1 });
    ({ days, weekdays } = getDays());
  };

  const selectDate = (day) => {
    if (!day) return;
    const dateObj = firstDayOfThisMonth.set({ day });
    if (dateObj >= today.startOf('day')) selectedDate = dateObj
  };

  import { onMount } from "svelte";
  onMount(() => {
    const handleClickOutside = (event) => {
      if (container && !container.contains(event.target)) {
        open = false;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });
</script>

  <div class="relative" bind:this={container}>

    <!-- dropdown toggle -->
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->  
    <div
      class={`w-50 px-4 py-2 border rounded text-center cursor-pointer ${open ? 'bg-amber-400' : 'bg-white'}`}
      onclick={() => open = !open}
    >
    {selectedDate.toFormat('dd MMMM yyyy')}
    </div>

    {#if open}
      <!-- dropdown calendar -->
       <div class="flex-center">
      <div class="absolute mt-1 p-2 w-80 bg-[#7d1b1f] border-2 rounded-xl border-white z-10">
        <div class="flex justify-between items-center mb-2 text-white">
          <button onclick={prevMonth} class="hover:bg-green-400 text-sm" type="button">Previous</button>
          <div class="font-bold">{firstDayOfThisMonth.toFormat("MMMM yyyy")}</div>
          <button onclick={nextMonth} class="hover:bg-green-400 text-sm" type="button">Next</button>
        </div>

        <div class="grid grid-cols-7 text-center bold text-white gap-3">
          {#each weekdays as day}
            <div>{day}</div>
          {/each}
        </div>

        <div class="grid grid-cols-7 text-center text-white gap-3">
          {#each days as day}
            {#if day === ""}
              <div></div>
            {:else}
          <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->  
                  <div  
                  class="rounded p-1 cursor-pointer
                    {firstDayOfThisMonth.set({ day }).hasSame(selectedDate, 'day')
                      ? 'bg-green-400 text-white hover:bg-green-400'
                      : firstDayOfThisMonth.set({ day }) < today
                        ? 'bg-gray-500 hover:cursor-not-allowed opacity-50'
                        : 'bg-red-400 `text-white hover:bg-green-400'}"
                  onclick={() => {
                    const dateObj = firstDayOfThisMonth.set({ day });
                    if (dateObj >= today.startOf('day')) {
                      selectDate(day);
                      open = false; // <-- close the dropdown immediately
                    }
                  }}
                  >
                {day}
              </div>
            {/if}
          {/each}
        </div>
      </div>
      </div>
    {/if}

  </div>
