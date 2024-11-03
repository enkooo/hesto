<script setup lang="ts">
import * as z from 'zod'

const { t } = useI18n()

const Messages: [string, ...string[]] = [
  t('contactForm.messageTypes.quoteInquiry'),
  t('contactForm.messageTypes.supportRequest'),
  t('contactForm.messageTypes.generalQuestion'),
  t('contactForm.messageTypes.feedback'),
  t('contactForm.messageTypes.partnershipInquiry'),
  t('contactForm.messageTypes.technicalIssue'),
]
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

const schema = z.object({
  name: z
    .string({
      required_error: t('contactForm.messages.nameRequired'),
    })
    .min(2, {
      message: t('contactForm.messages.nameMin'),
    }),

  email: z
    .string({
      required_error: t('contactForm.messages.emailRequired'),
    })
    .email(t('contactForm.messages.invalidEmail')),

  phone: z
    .string({
      required_error: t('contactForm.messages.phoneRequired'),
    })
    .regex(phoneRegex, t('contactForm.messages.invalidNumber')),

  messageType: z
    .enum(Messages, {
      required_error: t('contactForm.messages.messageTypeRequired'),
    })
    .describe(t('contactForm.fields.messageType')),

  messageTitle: z
    .string({
      required_error: t('contactForm.messages.messageTitleRequired'),
    })
    .min(2, {
      message: t('contactForm.messages.messageTitleMin'),
    }),

  messageContent: z
    .string({
      required_error: t('contactForm.messages.messageContentRequired'),
    })
    .min(10, {
      message: t('contactForm.messages.messageContentMin'),
    })
    .max(160, {
      message: t('contactForm.messages.messageContentMax'),
    }),

  acceptTerms: z
    .boolean({
      required_error: t('contactForm.messages.acceptTermsRequired'),
    })
    .refine((val) => val === true, {
      message: t('contactForm.messages.acceptTerms'),
    }),
})

function onSubmit(values: Record<string, any>) {
  console.log('values', values)
}
</script>

<template>
  <div
    :id="$t('links.contact').split('#')[1]"
    class="container mt-20 pb-20"
  >
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('contactForm.heading') }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-typography-gray">{{ $t('contactForm.subheading') }}</p>
    </section>
    <div class="mt-10">
      <AutoForm
        class="auto-contact-form mx-auto max-w-5xl space-y-6 md:grid md:w-full md:grid-cols-3 md:gap-6 md:space-y-0"
        :schema="schema"
        :field-config="{
          name: {
            label: $t('contactForm.fields.name'),
          },
          email: {
            label: $t('contactForm.fields.email'),
            inputProps: {
              type: 'email',
            },
          },
          phone: {
            label: $t('contactForm.fields.phone'),
          },
          messageTitle: {
            label: $t('contactForm.fields.messageTitle'),
          },
          messageContent: {
            label: $t('contactForm.fields.messageContent'),
            component: 'textarea',
          },
          acceptTerms: {
            label: $t('contactForm.checkbox.label'),
            inputProps: {
              required: true,
            },
          },
        }"
        @submit="onSubmit"
      >
        <template #acceptTerms="slotProps">
          <div>
            <AutoFormField v-bind="slotProps" />
            <div class="!mt-2 text-xs">
              {{ $t('contactForm.checkbox.text') }}
            </div>
          </div>
        </template>

        <div class="flex gap-3 md:ml-auto md:w-[450px]">
          <Button
            class="w-full bg-[#d7e9e8] text-[#0f736b] hover:bg-[#cae2e1]"
            type="reset"
          >
            {{ $t('contactForm.buttons.clear') }}
          </Button>
          <Button
            class="w-full"
            type="submit"
          >
            {{ $t('contactForm.buttons.send') }}
          </Button>
        </div>
      </AutoForm>
    </div>
  </div>
</template>

<style>
.auto-contact-form div:last-child {
  grid-column: 1 / -1;
}

.auto-contact-form div:nth-child(5) {
  grid-column: span 2 / span 2;
}

.auto-contact-form div:nth-child(6) {
  grid-column: 1 / -1;
}

.auto-contact-form div:nth-child(7) {
  grid-column: 1 / -1;
}
</style>
